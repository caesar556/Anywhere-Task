import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Announcement from "../common/Announcement";
import Quiz from "../common/Quiz";

export default function GridContent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginY: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Grid sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <Announcement />
        </Box>
      </Grid>

      <Grid
        sx={{
          width: isSmallScreen ? "100%" : "auto",
        }}
      >
        <Quiz />
      </Grid>
    </Grid>
  );
}
