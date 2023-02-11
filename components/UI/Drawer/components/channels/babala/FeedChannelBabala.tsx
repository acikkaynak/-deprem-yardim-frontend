import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { FeedChannelBabalaProps } from "../../types";
import { Divider } from "@mui/material";

const FeedChannelBabala = ({
  full_text,
  reason,
  extra_parameters,
}: FeedChannelBabalaProps) => {
  const isNotNan = (value: any) => {
    return !!value && value !== "NaN" && value !== "nan";
  };

  const extraValues =
    extra_parameters &&
    Object.entries(extra_parameters).map(([k, v]) => {
      if (isNotNan(v)) {
        return (
          <Typography key={k} style={styles.fullText}>
            {v}
          </Typography>
        );
      }
    });

  return (
    <>
      <div style={styles.container}>
        <div style={styles.logo_container}>
          <Typography style={styles.logo}>Babala</Typography>
          <div style={styles.chip_container}>
            {isNotNan(reason) && (
              <Chip label={reason?.toLowerCase()} color="info" />
            )}
          </div>
        </div>
        <Divider />
        <Typography style={styles.fullText}>{full_text}</Typography>
        {extraValues}
      </div>
    </>
  );
};

const styles = {
  chip_container: {
    display: "flex",
    gap: 5,
    fontWeight: 500,
  },
  logo_container: {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  logo: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 800,
  },
  container: {
    padding: "11px 15px 40px 15px",
    margin: "10px 0",
    borderRadius: "12px",
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
  },
  fullText: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.35,
    marginTop: 20,
  },
};

export default FeedChannelBabala;
