import React from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";

const PaymentInfoModal = ({ open, onClose, onApprove, onReject }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        {/* Title */}
        <Typography variant="h6" textAlign="center" mb={2}>
          Payment Information
        </Typography>

        {/* Payment Details */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body2" fontWeight="bold">
              AMOUNT PAID:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">$12.74</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body2" fontWeight="bold">
              DATE PAID:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">11/11/2024</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body2" fontWeight="bold">
              PAYMENT METHOD:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">Bank Transfer</Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Summary */}
        <Typography variant="body2" fontWeight="bold" mb={1}>
          SUMMARY
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2">AccountNumber</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">dgfgdf</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">BeneficiaryName</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">dggdfg</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">Address</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">fgfdf</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">NID</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">[NID Content]</Typography>
          </Grid>
        </Grid>

        {/* Feedback Section */}
        <Typography variant="body2" fontWeight="bold" mt={2}>
          SEND YOUR FEEDBACK
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Feedback"
          sx={{ mt: 1 }}
        />

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
            mt: 2,
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button variant="contained" color="success" onClick={onApprove}>
            Approved
          </Button>
          <Button variant="contained" color="error" onClick={onReject}>
            Rejected
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PaymentInfoModal;
