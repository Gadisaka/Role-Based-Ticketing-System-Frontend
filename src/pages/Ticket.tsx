import React, { useState } from "react";
import AgentTickets from "../components/agent/agentTickets";
import CompanyTickets from "../components/company/companyTickets";
import CustomerTickets from "../components/customer/customerTicket";

// import useAuthStore from "../../store/store";

const Ticket: React.FC = () => {
  //   const role = useAuthStore((state) => state.userRole);
  const [role, setRole] = useState("agent");

  switch (role) {
    case "company":
      return <CompanyTickets />;
    case "agent":
      return <AgentTickets />;
    case "customer":
      return <CustomerTickets />;
    default:
      return null;
  }
};

export default Ticket;
