import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";

const AddPackageCategoryForm = () => {
  return (
    <Box
 
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Add Tour Category
        </Typography>
        <Link to={"/admin/package-category"}>
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

      {/* Form Fields */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Category Name Field */}
        <Box sx={{ position: "relative" }}>
          <TextField
            fullWidth
            label="Category Name"
            variant="outlined"
            placeholder="e.g. Office Tour"
            InputProps={{
              sx: {
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
            }}
          />
          <Tooltip title="Enter the category name (e.g., Office Tour)" placement="top" arrow>
            <IconButton
              sx={{
                position: "absolute",
                right: "0px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            >
              ?
            </IconButton>
          </Tooltip>
        </Box>

     

      

        {/* Submit Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            width:200,
            backgroundColor: "#00c9a7",
            textTransform: "none",
            mt: 2,
            "&:hover": {
              backgroundColor: "#03a68b",
            },
          }}
        >
          Add Category
        </Button>
      </Box>
    </Box>
  );
};

export default AddPackageCategoryForm;
