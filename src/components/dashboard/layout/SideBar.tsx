"use client";
import React from "react";
import { Drawer, IconButton, useMediaQuery, type Theme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hoc/hooks";
import { logout } from "../../../redux/features/authSlice";
import SidebarContent from "../common/SideBarContent";

const PRIMARY = "#0047AB";
const drawerWidth = 200;

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleClick = (item: any) => {
    if (item.key === "logout") {
      handleLogout();
      return;
    }
    if (item.path) navigate(item.path);
    if (isSmall) setMobileOpen(false);
  };

  return (
    <>
      {isSmall && (
        <IconButton
          onClick={() => setMobileOpen((s) => !s)}
          sx={{
            position: "fixed",
            top: 12,
            left: 12,
            zIndex: 1400,
            bgcolor: "background.paper",
          }}
          aria-label="open sidebar"
        >
          <MenuIcon />
        </IconButton>
      )}

      {isSmall ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: PRIMARY,
              color: "#fff",
            },
          }}
        >
          <SidebarContent onItemClick={handleClick} location={location} />
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: PRIMARY,
              color: "#fff",
            },
          }}
        >
          <SidebarContent onItemClick={handleClick} location={location} />
        </Drawer>
      )}
    </>
  );
}
