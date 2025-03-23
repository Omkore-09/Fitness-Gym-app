import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";

const workoutDetails = {
  "full-body": {
    title: "Full Body Workout 🏋️‍♀️",
    description: "A mix of cardio and strength exercises that targets all muscle groups.",
    image: "https://source.unsplash.com/600x400/?fitness,women",
  },
  "glutes-legs": {
    title: "Glutes & Legs Workout 🍑",
    description: "Strengthen your lower body with squats, lunges, and deadlifts.",
    image: "https://source.unsplash.com/600x400/?gym,legs",
  },
  "arms-shoulders": {
    title: "Arms & Shoulders Workout 💪",
    description: "Tone your arms with dumbbell curls, shoulder presses, and dips.",
    image: "https://source.unsplash.com/600x400/?gym,arms",
  },
  "core-abs": {
    title: "Core & Abs Workout 🔥",
    description: "Focus on core stability with crunches, planks, and leg raises.",
    image: "https://source.unsplash.com/600x400/?gym,abs",
  },
  "yoga-stretching": {
    title: "Yoga & Stretching 🧘‍♀️",
    description: "Improve flexibility and mindfulness with yoga poses and stretches.",
    image: "https://source.unsplash.com/600x400/?yoga,stretching",
  },
};

const WomensWorkoutDetail = () => {
  const { workoutType } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchWorkoutVideos = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/search",
        params: { query: `${workoutType} workout for women`, type: "video", hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      };

      try {
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
        <CardMedia component="img" height="350" image={workout?.image} alt={workout?.title} />
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

export default WomensWorkoutDetail;
