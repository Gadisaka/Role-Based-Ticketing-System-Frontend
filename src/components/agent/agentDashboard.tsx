import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import TicketCard from "../common/TicketCard";
import { fakeTickets } from "../../models/Ticket";
import { companies } from "../../models/Company";

const AgentDashboard = () => {
  return (
    <div className="pl-[175px]  md:pl-[75px] gap-4 grid grid-cols-1 md:grid-cols-4 justify-items-center w-full h-full p-5">
      <Box className="flex flex-col justify-center items-center p-5 shadow-md rounded-lg  h-[90%] ">
        <Typography variant="body1" color="initial">
          Tasks Assigned To Me
        </Typography>
        <Box className="w-full h-[90%] flex flex-col justify-center items-center gap-5 pt-[50px] overflow-y-scroll section">
          {fakeTickets.map((ticket) => {
            return <TicketCard data={ticket} />;
          })}
        </Box>
      </Box>
      <Box className="flex flex-col justify-center items-center p-5 shadow-md rounded-lg  max-h-fit ">
        <Typography variant="body1" color="initial">
          {" "}
          Companies{" "}
        </Typography>
        {companies.map((company) => {
          return (
            <Box className="w-[300px] h-[100px] flex justify-between items-center my-2 rounded-md  shadow-md  p-2">
              <Box className="flex flex-col justify-center ">
                {" "}
                <Typography variant="body1" className="text-blue-500">
                  {company.name}
                </Typography>{" "}
                <Typography variant="body1" className="text-gray-500">
                  {company.location}
                </Typography>{" "}
              </Box>
              <Avatar />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default AgentDashboard;
