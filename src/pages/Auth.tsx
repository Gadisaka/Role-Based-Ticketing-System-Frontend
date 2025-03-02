import { Box } from "@mui/material";
import React from "react";
import Login from "../components/auth/login";
import useAuthStore from "../store/store";
import Signup from "../components/auth/signup";

const Auth: React.FC = () => {
  const isLogin = useAuthStore((state) => state.isLogin);

  return (
    <Box className="flex justify-center items-center h-full">
      {isLogin ? <Login /> : <Signup />}
    </Box>
  );
};

export default Auth;
