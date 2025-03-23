import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";

const workoutDetails = {
  chest: {
    title: "Chest Workout 💪",
    description:
      "Chest exercises strengthen the pectoral muscles and enhance upper body strength. Common exercises include bench press, push-ups, and dumbbell flys.",
    image: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg", 
  },
  legs: {
    title: "Leg Workout 🏋️",
    description:
      "Leg workouts improve lower body strength and stability. Squats, lunges, and leg presses are some effective exercises.",
    image: "https://images.pexels.com/photos/4720316/pexels-photo-4720316.jpeg",
  },
  arms: {
    title: "Arms Workout 💪",
    description:
      "Arm exercises target biceps, triceps, and forearms. Dumbbell curls, tricep dips, and hammer curls are great exercises for arm strength.",
    image: "https://images.pexels.com/photos/4761797/pexels-photo-4761797.jpeg",
  },
  back: {
    title: "Back Workout 🏋️‍♂️",
    description:
      "Back workouts help with posture and strength. Deadlifts, pull-ups, and lat pulldowns are effective exercises.",
    image: "https://images.pexels.com/photos/28061/pexels-photo.jpg",
  },
  shoulder: {
    title: "Shoulder Workout 🏋️‍♂️",
    description:
      "Shoulder exercises improve upper body mobility and strength. Shoulder presses, lateral raises, and front raises are key workouts.",
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
  abs: {
    title: "Abs Workout 🔥",
    description:
      "Ab workouts focus on core strength and definition. Crunches, planks, and leg raises are great exercises.",
    image: "https://images.pexels.com/photos/4720321/pexels-photo-4720321.jpeg",
  },
};

const WorkoutDetail = () => {
  const { workoutType } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchWorkoutVideos = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://youtube-search-and-download.p.rapidapi.com/search",
          params: { query: `${workoutType} workout`, type: "video", hl: "en", gl: "US" },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setVideos(response.data.contents.slice(0, 6)); // Get top 6 videos
      } catch (error) {
        console.error("Error fetching workout videos:", error);
      }
    };

    fetchWorkoutVideos();
  }, [workoutType]);

  const workout = workoutDetails[workoutType];

  return (
    <Box sx={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h3" fontWeight="bold" color="primary" textAlign="center" mb={3}>
        {workout?.title || "Workout"}
      </Typography>

      {/* Workout Info */}
      <Card sx={{ maxWidth: "800px", margin: "auto", boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="350"
          image={workout?.image}
          alt={workout?.title}
        />
        <CardContent>
          <Typography variant="h6">{workout?.description}</Typography>
        </CardContent>
      </Card>

      {/* Workout Videos */}
      <Typography variant="h4" mt={5} mb={3} color="secondary" textAlign="center">
        Watch Workout Videos 🎥
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardMedia
                component="iframe"
                height="220"
                src={`https://www.youtube.com/embed/${video.video.videoId}`}
                title={video.video.title}
              />
              <CardContent>
                <Typography variant="h6">{video.video.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkoutDetail;
