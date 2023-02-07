import { ClusterPopup } from "@/components/UI/ClusterPopup/ClusterPopup";
import Drawer from "@/components/UI/Drawer/Drawer";
import FooterBanner from "@/components/UI/FooterBanner/FooterBanner";
import { CoordinatesURLParameters, MarkerData } from "@/mocks/types";
import { useCoordinates, useMapActions } from "@/stores/mapStore";
import styles from "@/styles/Home.module.css";
import Container from "@mui/material/Container";
import dynamic from "next/dynamic";
import Head from "next/head";

import useDebounce from "@/hooks/useDebounce";
import dataTransformer from "@/utils/dataTransformer";
import { Partytown } from "@builder.io/partytown/react";
import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

const LeafletMap = dynamic(() => import("@/components/UI/Map"), {
  ssr: false,
});

const baseURL = "https://api.afetharita.com/tweets/locations";

export default function Home() {
  const [results, setResults] = useState<MarkerData[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [url, setURL] = useState(baseURL);
  const debouncedURL = useDebounce(url, 1000);

  const { toggleDrawer, setDrawerData, setPopUpData } = useMapActions();
  const coordinates: CoordinatesURLParameters | undefined = useCoordinates();

  useEffect(() => {
    if (coordinates) {
      const urlParams = new URLSearchParams(coordinates as any);
      setURL(baseURL + "?" + urlParams.toString());
    }
  }, [coordinates]);

  useEffect(() => {
    if (debouncedURL) {
      fetch(debouncedURL)
        .then((res) => res.json())
        .then((res) => {
          setResults(dataTransformer(res));
          setLoaded(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [debouncedURL]);

  const handleMarkerClick = useCallback(
    () => (event: KeyboardEvent | MouseEvent, markerData?: MarkerData) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      )
        return;

      toggleDrawer();

      if (markerData) {
        setDrawerData(markerData);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const togglePopUp = useCallback(
    (e: any) => {
      const markers = e.layer.getAllChildMarkers();
      setPopUpData({
        count: markers.length ?? 0,
        baseMarker: markers[0].options.markerData,
        markers: markers,
      });
    },
    [setPopUpData]
  );

  return (
    <>
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <title>Afet Haritası | Anasayfa</title>
        <meta
          name="description"
          content="Twitter, Instagram, Whatsapp ve çeşitli web siteleri gibi farklı kaynaklardan gelen tüm yardım çağrılarını topluyoruz ve bu veriyi sahada kullanılmak üzere anlamlı, rafine hale getiriyoruz. Amacımız bilgi teknolojilerini kullanarak ilgili kurum ve STK'lara yardımcı olmak ve afet zamanlarında açık bir veri platformu sağlamak.
"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <HelpButton /> FooterBanner'a taşındı */}
        <Container maxWidth={false} disableGutters>
          {loaded && (
            <LeafletMap
              // @ts-expect-error
              onClickMarker={handleMarkerClick()}
              data={results}
              onClusterClick={togglePopUp}
            />
          )}
        </Container>
        <Drawer toggler={handleMarkerClick()} />
        <ClusterPopup />
        <FooterBanner />
      </main>
    </>
  );
}
