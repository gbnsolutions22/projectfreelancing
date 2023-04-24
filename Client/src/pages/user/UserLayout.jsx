import { Box, Paper, styled } from "@mui/material";
import React from "react";
import { UserNavbar } from "./header/UserNavbar";
import bgImg from "../../assets/coding.jpeg";
import { theme } from "../../theme";
import Footer from "./footer/Footer";
import TypedEffect from "../../components/TypedEffect";
import { Outlet } from "react-router-dom";

const UserLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.body,
}));

const sentences = [
  "Create a detailed project plan with specific milestones and deadlines to keep yourself on track.",
  "Break down complex tasks into smaller, more manageable ones to make the project less daunting.",
  "Set priorities and focus on the most important tasks first.",
  "Eliminate distractions by minimizing interruptions, turning off notifications, and setting specific work hours.",
  "Consider delegating tasks to team members or outsourcing certain aspects of the project to speed up the process.",
  "Don't be afraid to ask for help or seek guidance from more experienced colleagues or mentors.",
  "Stay motivated and engaged by celebrating small successes and milestones along the way.",
];

function UserLayout() {
  return (
    <UserLayoutRoot>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          background: `url(${bgImg}) center top / cover transparent`,
          flexDirection: "column",
          width: "100%",
          backgroundSize: "cover",
          height: "75vh",
          color: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "50px",
            height: "100%",
          }}
        >
          <TypedEffect sentences={sentences} title="GrabIn" />
        </Box>
        <UserNavbar />
      </Box>
      <Box>
        <Paper
          sx={{
            margin: "-64px 24px 32px",
            minHeight: "55vh",
            boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "saturate(200%) blur(30px)",
            border: "0px solid rgba(0, 0, 0, 0.125)",
            backgroundClip: "border-box",
            overflow: "visible",
            borderRadius: "0.75rem",
            padding: "16px",
          }}
        >
          <Outlet />
        </Paper>
      </Box>
      <Footer />
    </UserLayoutRoot>
  );
}

export default UserLayout;
