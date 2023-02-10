import { ArrowForwardIos } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Button, ClickAwayListener, Popper, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { Tags } from "../Tag/Tag.types";
import styles from "./Map.module.css";
import { useTranslation } from "next-i18next";

const MapLegend = () => {
  const { t } = useTranslation("home");
  const [isLegendOpen, setIsLegendOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<{
    el: HTMLButtonElement;
    id: string;
  } | null>(null);

  let legendToggleStatusClass = styles.legend;

  const id = anchorEl ? "simple-popover" : undefined;

  if (isLegendOpen) {
    legendToggleStatusClass += ` ${styles.open}`;
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    if (anchorEl && anchorEl.el === event.currentTarget)
      return setAnchorEl(null);
    setAnchorEl({ el: event.currentTarget, id });
  };

  return (
    <>
      <div className={legendToggleStatusClass}>
        {Object.keys(Tags).map((intensity) => (
          <div key={intensity}>
            <Button
              className={styles.legend_item}
              aria-label={t(`tags.${Tags[intensity].intensity}`).toString()}
              onClick={(event) => handleClick(event, intensity)}
            >
              <div
                className={styles.legend_item__color}
                style={{ backgroundColor: Tags[intensity].color }}
              />
              <span className={styles.legend_item__text}>
                {t(`tags.${Tags[intensity].intensity}`)}
              </span>
            </Button>
            <Popper
              id={id}
              open={anchorEl?.id === intensity && !isLegendOpen}
              anchorEl={anchorEl?.el}
              sx={{ backgroundColor: "white", zIndex: 999, borderRadius: 2 }}
            >
              <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                <Typography sx={{ p: 2 }}>
                  {t(`tags.${Tags[intensity].intensity}`)}
                </Typography>
              </ClickAwayListener>
            </Popper>
          </div>
        ))}
        {isLegendOpen ? (
          <CloseIcon
            color="action"
            onClick={() => setIsLegendOpen((previous) => !previous)}
          />
        ) : (
          <ArrowForwardIos
            color="action"
            onClick={() => setIsLegendOpen((previous) => !previous)}
          />
        )}
      </div>
    </>
  );
};

export default MapLegend;
