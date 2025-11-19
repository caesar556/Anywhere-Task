import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import type { SidebarItem } from "../types/sidebar";


export const items: SidebarItem[] = [
  { key: "dashboard", text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { key: "schedule", text: "Schedule", icon: <EventNoteIcon />, path: "/dashboard/schedule" },
  { key: "courses", text: "Courses", icon: <AssignmentIcon />, path: "/dashboard/courses" },
  { key: "gradebook", text: "Gradebook", icon: <SchoolIcon />, path: "/dashboard/gradebook" },
  { key: "settings", text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { key: "logout", text: "Logout", icon: <LogoutIcon /> },
];