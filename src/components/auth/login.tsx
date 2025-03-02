import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import bg from "../../assets/workingpeople.jpg";
import useAuthStore from "../../store/store";

const Login: React.FC = () => {
  const toggleAuth = useAuthStore((state) => state.toggleAuth);

  return (
    <Box className="flex justify-center items-center h-full w-full ">
      {/* left */}
      <Box className="w-1/2 h-full hidden lg:flex  justify-center items-center ">
        <img
          src={bg}
          alt="bg"
          className=" relative h-full w-full object-cover"
        />
        <Box className="absolute  z-10 text-red-500 p-5">
          {" "}
          <Typography variant="h3" color="initial" className="text-4xl">
            Welcome to our page
          </Typography>
        </Box>
      </Box>
      {/* right */}
      <Box className="w-full lg:max-w-1/2 h-full p-5 py-40 ">
        <Box className="w-full h-full flex flex-col justify-center items-center ">
          <Typography variant="h3" color="initial">
            Welcome Back
          </Typography>
          <Typography variant="h3" color="initial">
            Login
          </Typography>
          <Box className="w-full h-full flex flex-col gap-3 justify-center items-center">
            <TextField
              type="email"
              label="Email"
              placeholder="example@email.com"
              variant="outlined"
              className="w-full lg:w-1/2 p-3 my-5"
            />
            <TextField
              type="password"
              label="Password"
              placeholder="password"
              variant="outlined"
              className="w-full lg:w-1/2 p-3 my-3"
            />
            <Box className="w-full lg:w-1/2 p-3 gap-2 flex items-center">
              <TextField type="checkbox" variant="standard" className="" />
              <Typography variant="body1" className="">
                Remember me
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className="w-1/2 md:w-1/3 p-3 my-3"
            >
              Login
            </Button>
            <Box className="w-full p-3 flex-col flex  justify-center items-center">
              <Typography variant="body1" className="text-gray-500">
                Forgot password? <Button>Reset</Button>{" "}
              </Typography>
              <Typography variant="body1" className="text-gray-500">
                Don't have an account?{" "}
                <Button onClick={toggleAuth}>Sign up</Button>{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
