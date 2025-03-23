import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation(); // Get current route

  const getLinkStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "#FF2625" : "#3A1212",
    borderBottom: location.pathname === path ? "3px solid #FF2625" : "none",
    paddingBottom: "5px",
  });

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#fff",
        zIndex: 1000,
        padding: "10px 20px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      </Link>

      {/* Navigation Links */}
      <Stack direction="row" gap="30px" fontSize="20px" alignItems="center">
        <Link to="/" style={getLinkStyle("/")}>Home</Link>
        <a href="#exercises" style={getLinkStyle("#exercises")}>Exercises</a>

        {/* Show These Links Only When User is Signed In */}
        <SignedIn>
          <Link to="/mens-workout" style={getLinkStyle("/mens-workout")}>Men's Workouts</Link>
          <Link to="/womens-workout" style={getLinkStyle("/womens-workout")}>Women's Workouts</Link>
        </SignedIn>
      </Stack>

      {/* Auth Section (Sign In / Profile) */}
      <Stack direction="row" alignItems="center" gap="20px">
        {/* When User is Signed Out - Show Sign In Button */}
        <SignedOut>
          <SignInButton>
            <Button variant="contained" color="error">Sign In</Button>
          </SignInButton>
        </SignedOut>

        {/* When User is Signed In - Show Profile Icon */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Stack>
    </Stack>
  );
};

export default Navbar;
