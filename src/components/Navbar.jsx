import React from "react";
import { Link } from "react-router-dom";
import { Stack, Avatar, Button } from "@mui/material";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
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
        <img
          src={Logo}
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack direction="row" gap="30px" fontSize="20px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>

        {/* Show These Links Only When User is Signed In */}
        <SignedIn>
          <Link
            to="/mens-workout"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Men's Workouts
          </Link>
          <Link
            to="/womens-workout"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Women's Workouts
          </Link>
        </SignedIn>
      </Stack>

      {/* Auth Section (Sign In / Profile) */}
      <Stack direction="row" alignItems="center" gap="20px">
        {/* When User is Signed Out - Show Sign In Button */}
        <SignedOut>
          <SignInButton>
            <Button variant="contained" color="error">
              Sign In
            </Button>
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
