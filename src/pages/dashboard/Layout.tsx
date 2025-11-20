import { Box, Container } from "@mui/material";
import {
  NavBar,
  Sidebar,
  Banner,
  GridContent,
} from "../../components/dashboard";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <Container sx={{ bgcolor: "#ffff" }}>
        <NavBar />
        <Box component="main">
          <Banner />
          <GridContent />
        </Box>
      </Container>
    </div>
  );
}
