import React from "react";
import { Link } from "react-router-dom";
import { Badge, IconButton, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <nav className="h-[50px] bg-gray-800 text-white flex items-center justify-between px-4 w-full">
      {/* Left Side - Logo or Home Link */}
      <Link to="/" className="text-lg font-semibold">
        Home
      </Link>

      {/* Right Side - Notifications & Avatar */}
      <div className="flex items-center gap-4">
        {/* Notifications Icon with Badge */}
        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            {" "}
            {/* Change "3" to dynamic count */}
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* User Avatar */}
        <Avatar
          alt="User Profile"
          src="/path-to-user-image.jpg" // Replace with actual user image or state
          sx={{ width: 32, height: 32 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
