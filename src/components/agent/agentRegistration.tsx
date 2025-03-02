import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useAuthStore from "../../store/store";

const AgentRegistration: React.FC = () => {
  const toggleAuth = useAuthStore((state) => state.toggleAuth);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    profilePhoto: null as File | null,
    bankingInfo: "",
    profession: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, profilePhoto: e.target.files[0] }));
    }
  };

  const handleNext = () => {
    // Additional validations can be added here
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSignup = () => {
    // Submit form data logic goes here
    console.log("Submitted Data:", formData);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const passwordsMatch = formData.password === formData.confirmPassword;

  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 600,

        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Agent Registration
      </Typography>
      {step === 1 && (
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!passwordsMatch && formData.confirmPassword.length > 0}
                helperText={
                  !passwordsMatch && formData.confirmPassword.length > 0
                    ? "Passwords do not match"
                    : ""
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          </Box>
          <Typography variant="body1" className="text-gray-500 ">
            {" "}
            Already have an Account?{" "}
            <Button onClick={toggleAuth}> login </Button>{" "}
          </Typography>
        </Box>
      )}
      {step === 2 && (
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="outlined" component="label" fullWidth>
                {formData.profilePhoto
                  ? "Profile Photo Selected"
                  : "Upload Profile Photo"}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Banking Info"
                name="bankingInfo"
                variant="outlined"
                value={formData.bankingInfo}
                placeholder="eg: CBE, 1000000000000"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Profession"
                name="profession"
                variant="outlined"
                value={formData.profession}
                placeholder="eg: Electrician"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box className="w-full lg:w-1/2 p-3 gap-2 flex items-center">
            <TextField type="checkbox" variant="standard" className="" />
            <Typography variant="body1" className="">
              I accept the{" "}
              <span className="text-blue-500 cursor-pointer">terms</span> and{" "}
              <span className="text-blue-500 cursor-pointer">conditions</span>.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" onClick={handleSignup}>
              Signup
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default AgentRegistration;
