import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";
import type { SidebarItem } from "../types/sidebar";

export const items: SidebarItem[] = [
  { key: "schedule", text: "Schedule", icon: <EventNoteIcon />, path: "/" },
  { key: "courses", text: "Courses", icon: <AssignmentIcon />, path: "/" },
  { key: "gradebook", text: "Gradebook", icon: <SchoolIcon />, path: "/" },
  { key: "logout", text: "Logout", icon: <LogoutIcon /> },
];
