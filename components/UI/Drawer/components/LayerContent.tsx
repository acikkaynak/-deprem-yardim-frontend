import { useWindowSize } from "@/hooks/useWindowSize";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../Drawer.module.css";
import { useTranslation } from "next-i18next";
import {
  MapLayer,
  MapType,
  useMapActions,
  useMapLayers,
  useMapType,
} from "@/stores/mapStore";
import { Typography } from "@mui/material";
import { LayerButton } from "./LayerButton";

export const LayerContent = () => {
  const { t } = useTranslation("home");
  const mapLayers = useMapLayers();
  const mapType = useMapType();
  const size = useWindowSize();
  const { toggleDrawer, toggleMapLayer, setMapType } = useMapActions();
  const close = () => toggleDrawer();
  const isMobile = size.width > 768;
  return (
    <Box
      sx={{
        width: isMobile ? 400 : "full",
        display: "flex",
        height: isMobile ? "100%" : 400,
        padding: "1rem",
        overflow: "auto",
      }}
      role="presentation"
    >
      <Box
        sx={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CloseIcon onClick={close} className={styles.closeButton} />
        <Typography fontSize="18px" sx={{ paddingTop: "1rem" }}>
          {t("map.type")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            margin: "0.5rem 0 2rem",
          }}
        >
          <LayerButton
            onClick={() => setMapType(MapType.Default)}
            image="default"
            checked={mapType === MapType.Default}
            title={t("map.base.default")}
          />
          <LayerButton
            onClick={() => setMapType(MapType.Satellite)}
            image="satellite"
            checked={mapType === MapType.Satellite}
            title={t("map.base.satellite")}
          />
          <LayerButton
            onClick={() => setMapType(MapType.Terrain)}
            image="terrain"
            checked={mapType === MapType.Terrain}
            title={t("map.base.terrain")}
          />
        </Box>
        <Typography fontSize="18px">{t("map.details")}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            margin: "0.5rem 0 2rem",
          }}
        >
          <LayerButton
            onClick={() => toggleMapLayer(MapLayer.Markers)}
            image="markers"
            checked={mapLayers.includes(MapLayer.Markers)}
            title={t("map.layer.markers")}
          />
          <LayerButton
            onClick={() => toggleMapLayer(MapLayer.Heatmap)}
            image="heatmap"
            checked={mapLayers.includes(MapLayer.Heatmap)}
            title={t("map.layer.heatmap")}
          />
          {/* <LayerButton onClick={() => toggleMapLayer(MapLayer.Earthquakes)} image="bubblemap" checked={mapLayers.includes(MapLayer.Earthquakes)} title={t("map.layer.earthquakes")} /> */}
        </Box>
      </Box>
    </Box>
  );
};
