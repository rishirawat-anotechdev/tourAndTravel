import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import img1 from "../assets/img1.jpg";

const AdminProfile = () => {
  return (
    <Box sx={{maxWidth:1000, mx: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
      <Box
        sx={{
          width: "100%",
          height: "160px",
          borderRadius: "10px",
          position: "relative",

          mb: 8,
        }}
      >
        {/* Background Image */}
        <img
          src={img1}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* Profile Picture Section */}
        <Box
          sx={{
            position: "absolute",
            top: "106px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src="https://via.placeholder.com/100"
            alt="Profile Placeholder"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          {/* Edit Icon */}
          <IconButton
            sx={{
              position: "absolute",
              bottom: "4px",
              right: "4px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <EditIcon sx={{ fontSize: "16px", color: "#000" }} />
          </IconButton>
        </Box>
      </Box>
   {/* Admin Information Paper */}
<Paper
  elevation={3}
  sx={{
    mb: 3,
    borderRadius: "10px",
    p: 2, // Add padding to Paper for consistent spacing
  }}
>
  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ borderBottom: 1, borderColor: "#eef0f7", px: 2, py: 1 }}>
    Admin Information
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Name"
        defaultValue="Mr Admin"
        variant="outlined"
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Username"
        defaultValue="admin"
        variant="outlined"
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Email"
        defaultValue="admin@mail.com"
        variant="outlined"
        size="small"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Phone"
        defaultValue="+4455541455"
        variant="outlined"
        size="small"
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Address line"
        defaultValue="NY, USA"
        variant="outlined"
        size="small"
      />
    </Grid>
  </Grid>
  <Box sx={{ p: 2 }}>
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        width: "150px",
        bgcolor: "#377dff",
      }}
      size="large"
    >
      Save changes
    </Button>
  </Box>
</Paper>

{/* Change Password Paper */}
<Paper
  elevation={3}
  sx={{
    borderRadius: "10px",
    p: 2, // Same padding as Admin Information Paper
  }}
>
  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ borderBottom: 1, borderColor: "#eef0f7", px: 2, py: 1 }}>
    Change your password
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Current password"
        placeholder="Enter current password"
        variant="outlined"
        size="small"
        type="password"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="New password"
        placeholder="Enter new password"
        variant="outlined"
        size="small"
        type="password"
      />
    </Grid>
    <Grid item xs={12} md={12}>
      <TextField
        fullWidth
        label="Confirm new password"
        placeholder="Confirm your new password"
        variant="outlined"
        size="small"
        type="password"
      />
    </Grid>
  </Grid>
  <Box sx={{ p: 2 }}>
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        width: "150px",
        bgcolor: "#377dff",
      }}
      size="large"
    >
      Save changes
    </Button>
  </Box>
</Paper>
 
    </Box>
  );
};

export default AdminProfile;
