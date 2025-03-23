import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const exerciseCategories = [
    { title: "Full Body Workout", img: "https://images.pexels.com/photos/4662345/pexels-photo-4662345.jpeg", path: "full-body" },
    { title: "Glutes & Legs Workout", img: "https://images.pexels.com/photos/6455782/pexels-photo-6455782.jpeg", path: "glutes-legs" },
    { title: "Arms & Shoulders Workout", img: "https://images.pexels.com/photos/3823130/pexels-photo-3823130.jpeg", path: "arms-shoulders" },
    { title: "Core & Abs Workout", img: "https://images.pexels.com/photos/4662348/pexels-photo-4662348.jpeg", path: "core-abs" },
    { title: "Yoga & Stretching", img: "https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg", path: "yoga-stretching" },
  ];
  

const WomensWorkout = () => {
  return (
    <Box sx={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh", textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" mb={3} color="primary">
        Women's Workout 💃🔥
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {exerciseCategories.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={`/womens-workout/${item.path}`} style={{ textDecoration: "none" }}>
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

export default WomensWorkout;
