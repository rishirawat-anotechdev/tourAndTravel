import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Card,
  Button,
  Paper,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import first1 from "../assets/first1.jpg";
import Person2Icon from "@mui/icons-material/Person2";
import CallIcon from "@mui/icons-material/Call";
import { EmailOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BookingDetailsPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState("Expired");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newStatus) => {
    if (newStatus) setStatus(newStatus);
    setAnchorEl(null);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={3}>
          {/* User Information */}
          <Card sx={{ marginBottom: 2, borderRadius: "10px" }}>
            <Box
              sx={{
                px: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "#eef0f7",
              }}
            >
              <Typography
                fontWeight="bold"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={first1}
                  alt={"img"}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                <p>Rocky </p>
              </Typography>
              <Button
                variant="text"
                sx={{
                  color: "#00c9a7",
                  textTransform: "none",
                  whiteSpace: "nowrap",
                }}
              >
                View Profile
              </Button>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography sx={{ color: "#888", fontSize: "14px" }}>
                ABOUT
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, display: "flex", alignItems: "center" }}
              >
                <Person2Icon sx={{ color: "#888", fontSize: "24px", mr: 1 }} />{" "}
                shanon singh
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, display: "flex", alignItems: "center" }}
              >
                <EmailOutlined
                  sx={{ color: "#888", fontSize: "24px", mr: 1 }}
                />{" "}
                shanon.gleicher@hotmail.com
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#007BFF",
                  marginTop: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MenuIcon sx={{ color: "#888", fontSize: "24px", mr: 1 }} /> 19
                Previous Booking
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: 1, display: "flex", alignItems: "center" }}
              >
                <CallIcon sx={{ color: "#888", fontSize: "24px", mr: 1 }} />{" "}
                +8801234567894
              </Typography>
            </Box>
          </Card>

          {/* Payment Information */}
          <Card sx={{ borderRadius: "10px" }}>
  <Typography
    variant="h6"
    fontWeight="bold"
    sx={{ px: 2, py: 1.2, borderBottom: 1, borderColor: "#eef0f7" }}
  >
    Payment Information
  </Typography>
  
  {/* Transaction Details Box */}
  <Box sx={{ p: 2 }}>
    <Typography sx={{ color: "#888", fontSize: "14px" }}>
      TRANSACTION DETAILS
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Add margin-top for spacing
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Booking ID:</p> <p>B244769953330</p>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ color: "#ed4c78" }}>Charge In Payment Currency:</p>{" "}
      <p>52.9 USD</p>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Paid In Payment Currency:</p> <p>551.9 USD</p>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Paid In Base:</p> <p>$551.90</p>
    </Typography>
  </Box>

  {/* Coupon Information Box */}
  <Box sx={{ p: 2 }}>
    <Typography sx={{ color: "#888", fontSize: "14px" }}>
      COUPON INFORMATION
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Amount:</p> <p>$499</p>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Coupon Apply:</p> <p>No</p>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Coupon:</p> <p>N/A</p>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ color: "#ed4c78" }}>Discount Amount:</p>{" "}
      <p>$551.90</p>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 2, // Consistent margin-top
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: 1,
        borderColor: "#eef0f7",
      }}
    >
      <p>Final Amount:</p> <p>$499</p>
    </Typography>
  </Box>
</Card>

        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={9}>
          {/* Booking Information */}
          <Card sx={{ marginBottom: 2, borderRadius: "10px" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ px: 2, py: 1.5, border: 1, borderColor: "#eef0f7" }}
            >
              <Typography variant="h6" fontWeight="bold">
                Booking Information
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  variant="body2"
                  color={status === "Expired" ? "error" : "success"}
                  sx={{
                    padding: "2px 8px",
                    borderRadius: "4px",
                    backgroundColor:
                      status === "Expired"
                        ? "#f8d7da"
                        : status === "Complete"
                        ? "#d4edda"
                        : "#fff3cd", // Different colors for statuses
                    display: "inline-block",
                  }}
                >
                  {status}
                </Typography>
                <IconButton
                  size="small"
                  onClick={handleClick}
                  sx={{ padding: 0 }}
                >
                  <ArrowDropDownIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => handleClose(null)}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      minWidth: 120,
                    },
                  }}
                >
                  <MenuItem onClick={() => handleClose("Complete")}>
                    Complete
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("Upcoming")}>
                    Upcoming
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("Cancelled")}>
                    Cancelled
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
            <Paper sx={{ p: 2, m: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    value="Maldives : 3 Day 2 Night"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Total Price"
                    value="499 USD"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Booking Date"
                    value="2024-11-01"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Booking Created Date"
                    value="2024-01-01"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Start Point"
                    value="Maldives"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="End Point"
                    value="Maldives"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Start Message"
                    value="Journey Start at 8:00 am."
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="End Messages"
                    value="Follow all instruction which provided by tour guide"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Total Adult"
                    value="1"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Total Child"
                    value="0"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Total Infant"
                    value="0"
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingDetailsPage;
