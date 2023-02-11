import { useCallback, useEffect, useMemo, useState } from "react";
import ClusterPopup from "@/components/UI/ClusterPopup";
import LoadingSpinner from "@/components/UI/Common/LoadingSpinner";
import RenderIf from "@/components/UI/Common/RenderIf";
import Drawer from "@/components/UI/Drawer/Drawer";
import FooterBanner from "@/components/UI/FooterBanner/FooterBanner";
import SitesIcon from "@/components/UI/SitesIcon/Icons";
import { MaintenanceError } from "@/errors";
import {
  CoordinatesURLParametersWithEventType,
  DeviceType,
} from "@/mocks/types";
import { dataFetcher } from "@/services/dataFetcher";
import {
  useCoordinates,
  useMapActions,
  setMarkerData,
  useDevice,
} from "@/stores/mapStore";
import styles from "@/styles/Home.module.css";
import {
  AHBAP_LOCATIONS_URL,
  REQUEST_THROTTLING_INITIAL_SEC,
} from "@/utils/constants";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import dynamic from "next/dynamic";
import useSWR from "swr";
import Footer from "@/components/UI/Footer/Footer";
import useIncrementalThrottling from "@/hooks/useIncrementalThrottling";
import { Box } from "@mui/material";
import { dataTransformerLite } from "@/utils/dataTransformer";
import { DataLite } from "@/mocks/TypesAreasEndpoint";
import { areasURL, locationsURL } from "@/utils/urls";
import HeadWithMeta from "@/components/base/HeadWithMeta/HeadWithMeta";
import FilterMenu from "@/components/UI/FilterMenu/FilterMenu";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";
import { initialChannelFilter } from "@/components/UI/FilterMenu/FilterChannelMenu";
import { useRouter } from "next/router";
import LocaleSwitch from "@/components/UI/I18n/LocaleSwitch";

const LeafletMap = dynamic(() => import("@/components/UI/Map"), {
  ssr: false,
});

type Props = {
  deviceType: DeviceType;
  singleItemDetail: any;
  ahbap: any[];
};

export default function Home({ deviceType, singleItemDetail }: Props) {
  const { t } = useTranslation(["common", "home"]);
  const router = useRouter();
  const [slowLoading, setSlowLoading] = useState(false);
  const [channelFilterMenuOption, setChannelFilterMenuOption] = useState(
    initialChannelFilter.value
  );
  const [reasonFilterMenuOption, setReasonFilterMenuOption] = useState<
    string | null
  >(null);
  const [newerThanTimestamp, setNewerThanTimestamp] = useState<
    number | undefined
  >(undefined);
  const [url, setUrl] = useState<string | null>(null);
  const [shouldFetchNextOption, setShouldFetchNextOption] =
    useState<boolean>(false);
  const device = useDevice();
  const isMobile = device === "mobile";
  const [ahbapLocations, setAhbapLocations] = useState<any[]>([]);

  const coordinatesAndEventType:
    | CoordinatesURLParametersWithEventType
    | undefined = useCoordinates();

  const resetShouldFetchNextOption = () => setShouldFetchNextOption(false);

  const urlParams = useMemo(() => {
    return new URLSearchParams({
      ne_lat: coordinatesAndEventType?.ne_lat,
      ne_lng: coordinatesAndEventType?.ne_lng,
      sw_lat: coordinatesAndEventType?.sw_lat,
      sw_lng: coordinatesAndEventType?.sw_lng,
      time_stamp: newerThanTimestamp ? newerThanTimestamp : undefined,
      ...(channelFilterMenuOption ? { channel: channelFilterMenuOption } : {}),
      ...(reasonFilterMenuOption ? { reason: reasonFilterMenuOption } : {}),
    } as any).toString();
  }, [
    coordinatesAndEventType?.ne_lat,
    coordinatesAndEventType?.ne_lng,
    coordinatesAndEventType?.sw_lat,
    coordinatesAndEventType?.sw_lng,
    newerThanTimestamp,
    channelFilterMenuOption,
    reasonFilterMenuOption,
  ]);

  const { error, isLoading, isValidating } = useSWR<DataLite | undefined>(
    url,
    dataFetcher,
    {
      isPaused: () => !coordinatesAndEventType,
      onLoadingSlow: () => setSlowLoading(true),
      revalidateOnFocus: false,
      onSuccess: async (data) => {
        if (!data) return;
        if (!data.results) {
          setShouldFetchNextOption(true);
        }

        const transformedData = data.results
          ? await dataTransformerLite(data)
          : [];
        setMarkerData(transformedData);
      },
    }
  );

  useSWR(AHBAP_LOCATIONS_URL, dataFetcher, {
    onSuccess: (data) => {
      if (!data) return;
      const features = data.results.map((item: any) => {
        let extra_params = {};
        try {
          extra_params = JSON.parse(
            item.extra_parameters?.replaceAll("'", '"').replaceAll("\\xa0", "")
          );
        } catch (error) {
          console.error(error);
        }

        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: item.loc?.reverse(),
          },
          properties: extra_params,
        };
      });
      setAhbapLocations(features);
    },
  });

  if (error) {
    throw new MaintenanceError(t("common:errors.maintenance").toString());
  }

  const { setDevice } = useMapActions();
  const [remainingTime, resetThrottling] = useIncrementalThrottling(
    () => setUrl(areasURL + "?" + urlParams),
    REQUEST_THROTTLING_INITIAL_SEC
  );

  const handleScanButtonClick = useCallback(() => {
    setUrl(areasURL + "?" + urlParams);
    resetThrottling();
  }, [resetThrottling, urlParams]);

  useEffect(() => {
    setDevice(deviceType);
  }, [deviceType, setDevice]);

  useEffect(() => {
    if (
      typeof coordinatesAndEventType === "undefined" ||
      !urlParams ||
      coordinatesAndEventType?.eventType === "moveend" ||
      coordinatesAndEventType?.eventType === "zoomend"
    ) {
      resetThrottling();
      return;
    }

    setUrl(areasURL + "?" + urlParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinatesAndEventType]);

  useEffect(() => {
    setUrl(areasURL + "?" + urlParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newerThanTimestamp]);

  useEffect(() => {
    if (url) {
      const _url = new URL(url);
      const params = new URLSearchParams(urlParams);

      setUrl(`${_url.origin}${_url.pathname}?${params.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelFilterMenuOption, reasonFilterMenuOption]);

  const onLanguageChange = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <>
      <HeadWithMeta singleItemDetail={singleItemDetail} />
      <main className={styles.main}>
        <Container maxWidth={false} disableGutters>
          <RenderIf condition={!error}>
            <div
              style={{
                position: "fixed",
                right: "10px",
                top: "15px",
                zIndex: "502",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 2,
                }}
              >
                <FilterMenu>
                  <FilterMenu.Channel onChange={setChannelFilterMenuOption} />
                  <FilterMenu.Time
                    onChangeTime={setNewerThanTimestamp}
                    shouldFetchNextOption={shouldFetchNextOption}
                    resetShouldFetchNextOption={resetShouldFetchNextOption}
                  />
                  <FilterMenu.Reason onChange={setReasonFilterMenuOption} />
                </FilterMenu>
              </div>
            </div>
            <LeafletMap ahbap={ahbapLocations} />
            <Box
              sx={{
                display: "flex",
                padding: "0",
                borderRadius: "10px",
                position: "absolute",
                bottom: isMobile ? "30px" : "90px",
                right: isMobile ? "10px" : "26px",
                zIndex: 500,
              }}
            >
              <LocaleSwitch
                current={router.locale || "tr"}
                onChange={onLanguageChange}
                mobile={isMobile}
              />
            </Box>
            {!isMobile && <SitesIcon></SitesIcon>}
            <Box
              sx={{
                position: "fixed",
                top: { md: "15px" },
                bottom: { xs: "88px", md: "unset" },
                left: "50%",
                marginLeft: "-105px",
                zIndex: "502",
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
                width: "210px",
              }}
            >
              <Button
                color="secondary"
                variant="contained"
                onClick={handleScanButtonClick}
              >
                {isLoading || isValidating ? (
                  <LoadingSpinner slowLoading={slowLoading} />
                ) : (
                  <span>{t("home:scanner.text")}</span>
                )}
              </Button>
              <small className={styles.autoScanInfoTextIndex}>
                <Trans
                  i18nKey="home:scanner.remaining"
                  values={{ time: remainingTime }}
                />
              </small>
            </Box>
          </RenderIf>
        </Container>
        <Drawer />
        <ClusterPopup />
        <FooterBanner />
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  let itemDetail = {};
  if (context.query.id) {
    const url = locationsURL(context.query.id) as string;
    itemDetail = await dataFetcher(url);
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "home"])),
      deviceType: isMobile ? "mobile" : "desktop",
      ahbap: [],
      singleItemDetail: context.query.id
        ? { ...itemDetail, ...context.query }
        : {},
    },
  };
}
