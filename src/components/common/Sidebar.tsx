import React, { useState } from "react";
import CompanySidebar from "../company/companySidebar";
import AgentSidebar from "../agent/agentSidebar";
import CustomerSidebar from "../customer/customerSidebar";
// import useAuthStore from "../../store/store";

const Sidebar: React.FC = () => {
  //   const role = useAuthStore((state) => state.userRole);
  const [role, setRole] = useState("company");

  switch (role) {
    case "company":
      return <CompanySidebar />;
    case "agent":
      return <AgentSidebar />;
    case "customer":
      return <CustomerSidebar />;
    default:
      return null;
  }
};

export default Sidebar;
