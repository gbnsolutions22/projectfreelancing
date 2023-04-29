import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {  Card, CardContent } from '@mui/material';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { SERVER_LINK } from "../variables/constants";
// import auth from "../auth/auth";
import side from "../assets/side.jpg";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verifu otp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          let user = result.user;
          console.log(user);
          alert("User signed in successfully");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };
  const renderContent = () => {
    if (!hasFilled) {
      return (
        <div className="app__container">
          <Card sx={{ width: "300px" }}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ padding: "20px" }} variant="h5" component="div">
                Enter your phone number
              </Typography>
              <form onSubmit={handleSend}>
                <TextField
                  sx={{ width: "240px" }}
                  variant="outlined"
                  autoComplete="off"
                  label="Phone Number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "240px", marginTop: "20px" }}
                >
                  Send Code
                </Button>
              </form>
            </CardContent>
          </Card>
          <div id="recaptcha"></div>
        </div>
      );
    } else {
      return (
        <div className="app__container">
          <Card sx={{ width: "300px" }}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ padding: "20px" }} variant="h5" component="div">
                Enter the OTP
              </Typography>
              <TextField
                sx={{ width: "240px" }}
                variant="outlined"
                label="OTP "
                value={otp}
                onChange={verifyOtp}
              />
            </CardContent>
          </Card>
          <div id="recaptcha"></div>
        </div>
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={0}
          md={7}
          sx={{
            backgroundImage: `url(${side})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
			<img src="https://cdn-icons-png.flaticon.com/512/150/150191.png" className="w-[10vw] w-"/>
            {renderContent()}
            <div id="recaptcha"></div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
