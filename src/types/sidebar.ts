import React from "react";

export interface SidebarItem {
  key: string;
  text: string;
  icon?: React.ReactNode;
  path?: string;
  onClick?: () => void;
  badge?: React.ReactNode;
}