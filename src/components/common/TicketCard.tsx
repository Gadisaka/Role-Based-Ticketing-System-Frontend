import { Avatar, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { ITicket } from "../../models/Ticket";

interface TicketCardProps {
  data: ITicket;
}

const TicketCard = ({ data }: TicketCardProps) => {
  return (
    <div className="w-[90%] bg-white shadow-md rounded-lg min-h-fit flex p-2 items-start group relative">
      <div className="flex flex-col px-2 w-full  ">
        <h1>{data.description}</h1>
        <h1 className="font-semibold">
          <span
            style={{
              color:
                data.priority === "Low"
                  ? "blue-500"
                  : data.priority === "Medium"
                  ? "green"
                  : data.priority === "High"
                  ? "orange"
                  : data.priority === "Critical"
                  ? "red"
                  : "black",
            }}
          >
            {data.priority}
          </span>
        </h1>
        <div className="flex justify-between items-center w-full ">
          <h1>{data.title}</h1>
          <Avatar
            alt="User Profile"
            src="/path-to-user-image.jpg" // Replace with actual user image or state
            sx={{ width: 32, height: 32 }}
          />
        </div>
      </div>

      {/* Button - Fix applied here */}
      <Button
        variant="contained"
        sx={{
          display: "none",
          position: "absolute",
          top: "8px",
          right: "8px",
          backgroundColor: "#12344d",
          "&:hover": { backgroundColor: "#12344f" },
          ".group:hover &": { display: "flex" }, // MUI equivalent of `group-hover:flex`
        }}
        onClick={() => console.log("bab")}
      >
        <MoreVertIcon />
      </Button>
    </div>
  );
};

export default TicketCard;
