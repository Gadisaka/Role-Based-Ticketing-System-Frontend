import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Box,
} from "@mui/material";

// MUI Icons
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";

const AgentSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  // A helper to define styling for icons based on active item
  const iconStyle = (itemName: string) => ({
    minWidth: 0,
    justifyContent: "center",
    color: activeItem === itemName ? "#fff" : "rgba(255,255,255,0.6)",
  });

  // Common styles for ListItemButton, including a highlight for the active item
  const buttonStyle = (itemName: string) => ({
    justifyContent: "center",
    mb: 1,
    "&.Mui-selected": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 72,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 72,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          borderRight: "1px solid #ccc",
          backgroundColor: "#12344d", // Sidebar background
        },
      }}
    >
      {/* Top Logo/Icon */}
      <Box sx={{ mt: 2, mb: 1 }}>
        <Tooltip title="Agent Panel" placement="right">
          <ListItemButton sx={{ justifyContent: "center" }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
                color: "#fff", // Always white for the top icon
              }}
            >
              <LibraryBooksIcon />
            </ListItemIcon>
          </ListItemButton>
        </Tooltip>
      </Box>

      {/* Main Icons List */}
      <List sx={{ width: "100%" }}>
        {/* Dashboard */}
        <Link to="dashboard">
          <Tooltip title="Dashboard" placement="right">
            <ListItemButton
              sx={buttonStyle("dashboard")}
              selected={activeItem === "dashboard"}
              onClick={() => setActiveItem("dashboard")}
            >
              <ListItemIcon sx={iconStyle("dashboard")}>
                <DashboardIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </Link>

        {/* Tickets */}
        <Link to="/tickets">
          <Tooltip title="Tickets" placement="right">
            <ListItemButton
              sx={buttonStyle("tickets")}
              selected={activeItem === "tickets"}
              onClick={() => setActiveItem("tickets")}
            >
              <ListItemIcon sx={iconStyle("tickets")}>
                <ConfirmationNumberIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </Link>

        {/* History */}
        <Link to="/history">
          <Tooltip title="History" placement="right">
            <ListItemButton
              sx={buttonStyle("history")}
              selected={activeItem === "history"}
              onClick={() => setActiveItem("history")}
            >
              <ListItemIcon sx={iconStyle("history")}>
                <HistoryIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </Link>

        {/* Settings */}
        <Link to="/settings">
          <Tooltip title="Settings" placement="right">
            <ListItemButton
              sx={buttonStyle("settings")}
              selected={activeItem === "settings"}
              onClick={() => setActiveItem("settings")}
            >
              <ListItemIcon sx={iconStyle("settings")}>
                <SettingsIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </Link>
      </List>
    </Drawer>
  );
};

export default AgentSidebar;
