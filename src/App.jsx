import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MensWorkout from "./pages/MensWorkout.jsx";
import WomensWorkout from "./pages/WomensWorkout.jsx";
import WorkoutDetail from "./pages/WorkoutDetail.jsx";
import WomensWorkoutDetail from "./pages/WomensWorkoutDetail.jsx";


const ProtectedRoute = ({ children }) => {
  return (
    <SignedIn>
      {children}
    </SignedIn>
  ) || <Navigate to="/" />;
};

const App = () => {
  return (
    <Box sx={{ mt: "80px" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        
        {/* Protected Routes (Require Login) */}
        <Route path="/mens-workout" element={<ProtectedRoute><MensWorkout /></ProtectedRoute>} />
        <Route path="/womens-workout" element={<ProtectedRoute><WomensWorkout /></ProtectedRoute>} />
        <Route path="/workout/:workoutType" element={<WorkoutDetail />} />
        <Route path="/womens-workout/:workoutType" element={<WomensWorkoutDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
