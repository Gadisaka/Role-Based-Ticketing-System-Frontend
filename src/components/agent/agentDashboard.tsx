import React from "react";
import Section from "./section";

const AgentDashboard = () => {
  const sections = ["Open", "In Progress", "Resolved", "Closed"];

  return (
    <div className="pl-[75px] gap-4 flex justify-center w-full h-full items-center ">
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default AgentDashboard;
