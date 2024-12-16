import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  Stack,
  Link,
  Paper,
  Grid,
  IconButton,
  Collapse,
  Menu,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import img1 from "../assets/img1.jpg";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const sections = [
  { id: "basic-info", label: "Basic Information", icon: <AccountBoxOutlinedIcon /> },
  { id: "email", label: "Email", icon: <EmailOutlinedIcon /> },
  { id: "username", label: "Username", icon: <AccountBoxOutlinedIcon /> },
  { id: "password", label: "Password", icon: <VpnKeyOutlinedIcon /> },
  { id: "delete-account", label: "Delete Account", icon: <DeleteOutlineIcon /> },
];

const UserProfilePage = () => {
  // State for controlling the stack visibility
  const [showStack, setShowStack] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState(true);

  // Handle opening the menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle changing status
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    handleMenuClose();
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Scroll to the related section
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setShowStack(false);
  };

  return (
    <Grid container spacing={2}>
      {/* Top Menu Button for Smaller Screens */}
      <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderRadius: showStack ? "10px 10px 0px 0px" : "10px",
            px: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h8" sx={{ fontWeight: 500 }}>
            Menu
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setShowStack((prev) => !prev)}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Smooth transition for Stack using Collapse */}
        <Collapse in={showStack}>
          <Box
            sx={{
              borderRadius: "0 0 10px 10px",
              borderTop: 1,
              borderColor: "#eef0f7",
              backgroundColor: "#fff",
            }}
          >
            <Stack spacing={2} sx={{ padding: 2 }}>
              {sections.map((section) => (
                <Box
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  sx={{
                    padding: 1,
                    borderRadius: 1,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  {section.icon}
                  <Typography variant="body1">{section.label}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Grid>

      {/* Left Sticky Navigation Box for Larger Screens */}
      <Grid item xs={0} md={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Paper
          sx={{
            position: "sticky",
            top: "100px",
            padding: 2,
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "10px",
          }}
        >
          {sections.map((section) => (
            <Link
              key={section.id}
              onClick={() => handleScroll(section.id)}
              sx={{
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
                color: "#000",
              
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "#1976d2" },
              }}
            >
              {section.icon}
              <Typography variant="body1">{section.label}</Typography>
            </Link>
          ))}
        </Paper>
      </Grid>

      {/* Right Content Section */}
      <Grid item xs={12} md={9}>
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
          }}
        >
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

          {sections.map((section) => (
            <Box
              key={section.id}
              id={section.id}
              sx={{
                marginBottom: 4,

                borderRadius: 2,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  px: 2,
                  py: 1,
                  marginBottom: 2,
                  borderBottom: 1,
                  borderColor: "#eef0f7",
                }}
              >
                {section.label}
              </Typography>
              {section.id === "basic-info" && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 1,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField
                      label="First Name"
                      fullWidth
                      defaultValue="Rishi"
                    />
                    <TextField
                      label="Last Name"
                      fullWidth
                      defaultValue="Rawat"
                    />
                  </Box>
                  <TextField
                    label="Phone"
                    fullWidth
                    defaultValue="8273147793"
                  />
                  <TextField label="Country" fullWidth defaultValue="India" />
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField label="City" fullWidth />
                    <TextField label="State" fullWidth />
                    <TextField label="Zip Code" fullWidth />
                  </Box>
                  <TextField label="Address Line 1" fullWidth />
                  <TextField label="Address Line 2" fullWidth />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography>Status</Typography>
                    <Switch
                      checked={status}
                      onChange={(e) => setStatus(e.target.checked)}
                    />
                    <IconButton onClick={handleMenuClick}>
                      <MoreVertIcon />
                    </IconButton>

                    {/* Status Menu */}
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => handleStatusChange(true)}>
                        Activate User
                      </MenuItem>
                      <MenuItem onClick={() => handleStatusChange(false)}>
                        Deactivate User
                      </MenuItem>
                    </Menu>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ width: "150px", bgcolor: "#377dff" }}
                  >
                    Save Changes
                  </Button>
                </Box>
              )}
              {section.id === "email" && (
                <Box
                  sx={{
                    px: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Your current email address is rawatrishi390@gmail.com
                  </Typography>
                  <TextField
                    fullWidth
                    label="New email address"
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      width: "150px",
                      bgcolor: "#377dff",
                      mb: 2,
                    }}
                    size="large"
                  >
                    Save changes
                  </Button>
                </Box>
              )}
              {section.id === "username" && (
                <Box
                  sx={{
                    px: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Your current username is @rishi_rawat
                  </Typography>
                  <TextField
                    fullWidth
                    label="New Username"
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      width: "150px",
                      bgcolor: "#377dff",
                      mb: 2,
                    }}
                    size="large"
                  >
                    Save changes
                  </Button>
                </Box>
              )}
              {section.id === "password" && (
                <Box
                  sx={{
                    px: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    label="New password"
                    variant="outlined"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    sx={{ mb: 2 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Confirm new password"
                    variant="outlined"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    sx={{ mb: 2 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      width: "150px",
                      bgcolor: "#377dff",
                      mb: 2,
                    }}
                    size="large"
                  >
                    Save Changes
                  </Button>
                </Box>
              )}
              {section.id === "delete-account" && (
                <Box
                  sx={{
                    px: 2,
                  }}
                >
                  {/* Description */}
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    When you delete your account, you lose access to Front
                    account services, and we permanently delete your personal
                    data. You can cancel the deletion for 14 days.
                  </Typography>

                  {/* Checkbox */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                        color="primary"
                      />
                    }
                    label="Confirm that I want to delete my account."
                  />

                  {/* Delete Button */}
                  <Button
                    variant="contained"
                    color="error"
                    disabled={!checked}
                    sx={{ mt: 2, textTransform: "none", width: "150px", mb: 2 }}
                  >
                    Delete
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfilePage;
