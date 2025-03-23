import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const exerciseCategories = [
  { title: "Full Body Workout", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoOB_xib82jX2ZPOlNquiM94sGsVg67UUa9g&s", path: "full-body" },
  { title: "Chest Workout", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOJGpTDVpjcj9TUqDcCQpUwa3qdjfoY_cTg&s", path: "chest" },
  { title: "Leg Workout", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_J3G-U9P304uCx8nGQbj6Rpuwtd-VeWY6g&s", path: "legs" },
  { title: "Arms Workout", img: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg", path: "arms" },
  { title: "Back Workout", img: "https://images.pexels.com/photos/28061/pexels-photo.jpg", path: "back" },
  { title: "Shoulder Workout", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLC8kyzxWYdpcpatq1F_2Z1HKPBPLOFR4jQ&s", path: "shoulders" },
  { title: "Abs Workout", img: "https://images.pexels.com/photos/4720321/pexels-photo-4720321.jpeg", path: "abs" },
];


const MensWorkout = () => {
  return (
    <Box sx={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh", textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" mb={3} color="primary">
        Men's Workout 💪🔥
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {exerciseCategories.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={`/workout/${item.path}`} style={{ textDecoration: "none" }}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia component="img" height="220" image={item.img} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MensWorkout;
