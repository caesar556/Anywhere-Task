"use client";
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { items } from "../../../constants/items";
import { useLocation, useNavigate } from "react-router-dom";

const PRIMARY = "#0047AB";
const ACTIVE_BG = "#ffffff";
const ACTIVE_COLOR = PRIMARY;
const drawerWidth = 200;

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (item: (typeof items)[number]) => {
    if (item.key === "logout") {
      navigate("/");
      return;
    }
    if (item.path) navigate(item.path);
    if (isSmall) setMobileOpen(false);
  };

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        height: "100%",
        bgcolor: PRIMARY,
        color: "#fff",
      }}
    >
      <Box sx={{ px: 2, py: 1, marginTop: "10px", marginBottom: "14px" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "#fff", fontWeight: 700 }}
        >
          Coligo
        </Typography>
      </Box>

      <List>
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.key} disablePadding sx={{ marginTop: "12px" }}>
              <ListItemButton
                onClick={() => handleClick(item)}
                sx={{
                  mx: 1.5,
                  borderRadius: "12px",
                  backgroundColor: isActive ? ACTIVE_BG : "transparent",
                  color: isActive ? ACTIVE_COLOR : "#fff",
                  "&:hover": {
                    backgroundColor: ACTIVE_BG,
                    color: ACTIVE_COLOR,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? ACTIVE_COLOR : "#fff",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

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
          {drawerContent}
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
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}
