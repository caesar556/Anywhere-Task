import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { items } from "../../../constants/items";

const PRIMARY = "#0047AB";
const ACTIVE_BG = "#ffffff";
const ACTIVE_COLOR = PRIMARY;

interface SidebarContentProps {
  onItemClick: (item: (typeof items)[number]) => void;
  location: any;
}

export default function SidebarContent({
  onItemClick,
  location,
}: SidebarContentProps) {
  return (
    <Box sx={{ width: 200, height: "100%", bgcolor: PRIMARY }}>
      <Box sx={{ px: 2, py: 1, mt: "10px", mb: "14px" }}>
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
          const isActive = item.path && location.pathname === item.path;

          return (
            <ListItem key={item.key} disablePadding sx={{ mt: "12px" }}>
              <ListItemButton
                onClick={() => onItemClick(item)}
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
                  sx={{ color: isActive ? ACTIVE_COLOR : "#fff", minWidth: 40 }}
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
}
