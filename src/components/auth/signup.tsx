import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import bg from "../../assets/workingpeople.jpg";
import useAuthStore from "../../store/store";
import CompanyRegistration from "../company/companyRegistration";
import AgentRegistration from "../agent/agentRegistration";
import CustomerRegistration from "../customer/customerRegistration";

const Signup: React.FC = () => {
  const toggleAuth = useAuthStore((state) => state.toggleAuth);
  const [accountType, setAccountType] = useState<string | null>(null);

  if (!accountType) {
    return (
      <Box className="flex h-full w-full">
        {/* Left Section with Background */}
        <Box className="w-1/2 h-full hidden md::flex justify-center items-center relative">
          <img
            src={bg}
            alt="bg"
            className="absolute h-full w-full object-cover"
          />
          <Box className="absolute z-10 p-5 text-black bg-opacity-50 rounded-md">
            <Typography variant="h3" className="text-4xl">
              Welcome to our page
            </Typography>
          </Box>
        </Box>
        {/* Right Section with Account Selection */}
        <Box className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-5 ">
          <Box className="w-full md:w-[80%] h-[80%] flex flex-col justify-between items-center p-5 rounded-md shadow-lg">
            <Box></Box>
            <Box className="w-full h-full flex flex-col gap-5 justify-center items-center text-center ">
              <Typography variant="h3">Create an Account</Typography>
              <Typography variant="body1">
                Please Select Your Account Type
              </Typography>
              <Box className="flex flex-col md:flex-row gap-4 mt-5">
                <Button
                  variant="contained"
                  onClick={() => setAccountType("company")}
                >
                  Company
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setAccountType("agent")}
                >
                  Agent/Contractor
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setAccountType("customer")}
                >
                  Customer
                </Button>
              </Box>
            </Box>
            <Typography variant="body1" className="text-gray-500 ">
              {" "}
              Already have an Account?{" "}
              <Button onClick={toggleAuth}> login </Button>{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  const renderSignupForm = () => {
    switch (accountType) {
      case "company":
        return <CompanyRegistration />;
      case "agent":
        return <AgentRegistration />;
      case "customer":
        return <CustomerRegistration />;
      default:
        return null;
    }
  };

  return (
    <Box className="flex h-full w-full">
      {/* Left Section with Background */}
      <Box className="w-1/2 h-full hidden lg:flex justify-center items-center relative">
        <img
          src={bg}
          alt="bg"
          className="absolute h-full w-full object-cover"
        />
        <Box className="absolute z-10 text-white p-5 bg-black bg-opacity-50 rounded-md">
          <Typography variant="h3" className="text-4xl">
            Welcome to our page
          </Typography>
        </Box>
      </Box>
      {/* Right Section with Signup Form */}
      <Box className="w-full md:w-1/2 h-full p-5 py-40 flex justify-center items-center">
        {renderSignupForm()}
      </Box>
    </Box>
  );
};

export default Signup;
