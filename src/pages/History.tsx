import React, { useState } from "react";
import AgentHistory from "../components/agent/history";
import CompanyHistory from "../components/company/companyHistory";
import CustomerHistory from "../components/customer/customerHistory";

const History = () => {
  const [role, setRole] = useState("agent");

  switch (role) {
    case "company":
      return <CompanyHistory />;
    case "agent":
      return <AgentHistory />;
    case "customer":
      return <CustomerHistory />;
    default:
      return null;
  }
};

export default History;
