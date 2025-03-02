import React, { useState } from "react";
import AgentDashboard from "../components/agent/agentDashboard";
import CompanyDashboard from "../components/company/companyDashboard";
import CustomerDashboard from "../components/customer/customerDashboard";

// import useAuthStore from "../../store/store";

const Dashboard: React.FC = () => {
  //   const role = useAuthStore((state) => state.userRole);
  const [role, setRole] = useState("agent");

  switch (role) {
    case "company":
      return <CompanyDashboard />;
    case "agent":
      return <AgentDashboard />;
    case "customer":
      return <CustomerDashboard />;
    default:
      return null;
  }
};

export default Dashboard;
