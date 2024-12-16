import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddViewCoupon = () => {
  const [couponCode, setCouponCode] = useState("");

  // function to generate random code
  const generateCouponCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const codeLength = 8; // Customize the length of your coupon code
    let generatedCode = "";
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedCode += characters[randomIndex];
    }
    setCouponCode(generatedCode);
  };

  return (
    <Box
      component={Paper}
      sx={{
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          border: 1,
          borderColor: "#eef0f7",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Add Coupon Information
        </Typography>
        <Link to={"/admin/coupons"}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            sx={{
              backgroundColor: "#00bcd4",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#008c9e",
              },
            }}
          >
            Back
          </Button>
        </Link>
      </Box>
      <Grid container spacing={2} p={2}>
        {/* Coupon Code */}
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Coupon code"
            variant="outlined"
            size="small"
            value={couponCode}
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#00d0b0", "&:hover": { bgcolor: "#00b098" } }}
            onClick={generateCouponCode}
          >
            Generate code
          </Button>
        </Grid>

        {/* Start Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            size="small"
          />
        </Grid>

        {/* End Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            size="small"
          />
        </Grid>

        {/* Discount */}
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Discount"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Amount</InputLabel>
            <Select defaultValue="">
              <MenuItem value="percentage">Percentage</MenuItem>
              <MenuItem value="flat">Flat</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Save Button */}
        <Grid item xs={12}>
          <Button variant="contained" sx={{ bgcolor: "#00bcd4" }}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddViewCoupon;
