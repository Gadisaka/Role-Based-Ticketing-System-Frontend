import React from "react";
// import TicketCard from "../common/TicketCard";
// import { fakeTickets } from "../../models/Ticket";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ITicket } from "../../models/Ticket";
import { Avatar, Button } from "@mui/material";

interface TicketCardProps {
  data: ITicket[];
}

const Section = ({
  data,
  sectionTitle,
}: TicketCardProps & { sectionTitle: string }) => {
  return (
    <div className="w-[300px] h-[90%] bg-gray-50 rounded-md flex flex-col justify-between items-center ">
      <div className="w-full py-5 max-h-fit  px-3 ">
        <h1 className="text-lg text-gray-500 font-semibold">{sectionTitle}</h1>
      </div>
      <div className="flex flex-col items-center  h-full overflow-y-scroll gap-5 section">
        {data.map((ticket, index) => (
          <div
            key={index}
            className="w-[90%] bg-white shadow-md rounded-lg min-h-fit flex p-2 items-start group relative"
          >
            <div className="flex-wrap flex-col px-2">
              <h1>{ticket.description}</h1>
              <h1 className="font-semibold">
                <span
                  style={{
                    color:
                      ticket.priority === "Low"
                        ? "blue-500"
                        : ticket.priority === "Medium"
                        ? "green"
                        : ticket.priority === "High"
                        ? "orange"
                        : ticket.priority === "Critical"
                        ? "red"
                        : "black",
                  }}
                >
                  {ticket.priority}
                </span>
              </h1>
              <div className="flex justify-between items-center">
                <h1>{ticket.title}</h1>
                <Avatar
                  alt="User Profile"
                  src="/path-to-user-image.jpg" // Replace with actual user image or state
                  sx={{ width: 32, height: 32 }}
                />
              </div>
            </div>
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
              // onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              <MoreVertIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
