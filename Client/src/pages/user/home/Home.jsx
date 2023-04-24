import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

const numberStyle = {
  backgroundImage:
    "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
  backgroundSize: "100%",
  backgroundRepeat: "repeat",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "rgb(26, 115, 232)",
};

function Home() {
  return (
    <>
      <Box style={{ padding: "24px 0" }}>
        <Container fullwidth="lg">
          <Grid container direction="row" justifyContent="center" spacing={2}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h1">
                  <span style={numberStyle}>3+</span>
                </Typography>
                <Typography variant="h5">It domains</Typography>
                <Typography variant="body2">
                Streamline your project with us in various domains.
                </Typography>
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h1">
                  <span style={numberStyle}>100+</span>
                </Typography>
                <Typography variant="h5">Registered members</Typography>
                <Typography variant="body2">
                  Join the growing community of learners: members registered
                  and counting!
                </Typography>
              </Box>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h1">
                  <span style={numberStyle}>4.2</span>
                </Typography>
                <Typography variant="h5">User Satisfaction</Typography>
                <Typography variant="body2">
                  Start journey with us to increase efficiency, reduce costs, and accelerate the delivery of high-quality results
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
