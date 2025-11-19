import { Box, Container, Grid, Stack } from "@mui/material";
import {
  NavBar,
  Sidebar,
  Banner,
  Announcement,
} from "../../components/dashboard";
import Quiz from "../../components/dashboard/common/Quiz";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <Container sx={{ bgcolor: "#ffff" }}>
        <NavBar />
        <Box component="main">
          <Banner />

          <Grid container spacing={2} sx={{ marginY: "30px" }}>
            <Grid xs={12} md={8}>
              <Box
                sx={{
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Announcement />
              </Box>
            </Grid>

            <Grid xs={12} md={4} >
              <Stack spacing={2}>
                <Quiz />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
