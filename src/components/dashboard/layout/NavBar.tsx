import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MarkunreadIcon from "@mui/icons-material/Markunread";

export default function NavBar() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      
      elevation={0}
      sx={{
        px: 3, 
        py: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Typography variant="h5" >Welcome Bilal,</Typography>
  

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            bgcolor: "#f3f4f6",
            px: 2,
            py: 0.5,
            borderRadius: "9999px",
            width: 300,
          }}
        >
          <SearchIcon sx={{ color: "gray" }} />
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1, color: "gray" }}
          />
        </Box>

        <IconButton color="default">
          <Badge badgeContent={1} color="error">
            <MarkunreadIcon sx={{ color: "#0047AB" }} />
          </Badge>
        </IconButton>

        <IconButton color="default">
          <Badge badgeContent={1} color="error">
            <NotificationsIcon sx={{ color: "#0047AB" }} />
          </Badge>
        </IconButton>

        <Avatar
          src="https://i.pravatar.cc/300"
          sx={{ cursor: "pointer", width: 40, height: 40 }}
        />
      </Box>
    </AppBar>
  );
}
