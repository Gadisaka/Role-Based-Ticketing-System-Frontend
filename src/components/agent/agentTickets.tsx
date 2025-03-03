import React from "react";
import Section from "./section";
import { fakeTickets } from "../../models/Ticket";

const AgentTickets = () => {
  return (
    <div className="pl-[175px]  md:pl-[75px] gap-4 flex justify-center w-full h-full items-center overflow-x-scroll ">
      <Section
        data={fakeTickets.filter((ticket) => ticket.status === "Open")}
        sectionTitle="Open"
      />
      <Section
        data={fakeTickets.filter((ticket) => ticket.status === "In Progress")}
        sectionTitle="In Progress"
      />
      <Section
        data={fakeTickets.filter((ticket) => ticket.status === "Resolved")}
        sectionTitle="Resolved"
      />
      <Section
        data={fakeTickets.filter((ticket) => ticket.status === "Closed")}
        sectionTitle="Closed"
      />
    </div>
  );
};

export default AgentTickets;
