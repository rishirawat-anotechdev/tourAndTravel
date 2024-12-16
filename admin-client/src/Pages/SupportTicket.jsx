import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
 
  Paper,
  Badge,
  Button,
  InputAdornment,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

import { CancelOutlined } from "@mui/icons-material";
const SupportTicket = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi there!",
      time: "23 Nov, 2024 02:43 PM",
      type: "received",
      responseTo: null,
    },
    {
      id: 2,
      content: "Hello! How can I assist you?",
      time: "23 Nov, 2024 02:44 PM",
      type: "sent",
      responseTo: 1,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    // Add the new message (sent by the user)
    const newMsg = {
      id: messages.length + 1,
      content: newMessage,
      time: new Date().toLocaleString(),
      type: "sent",
      responseTo: null, // This indicates no parent message
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);
    setNewMessage("");

    // Simulate a received response after 1 second (only for this new message)
    setTimeout(() => {
      setMessages((prevMessages) => {
        // Check if the response for this message already exists
        const existingResponse = prevMessages.find(
          (msg) => msg.responseTo === newMsg.id
        );
        if (existingResponse) return prevMessages;

        // Add a new response
        const responseMsg = {
          id: prevMessages.length + 1,
          content: "Thanks for reaching out! Here's a response to your query.",
          time: new Date().toLocaleString(),
          type: "received",
          responseTo: newMsg.id,
        };
        return [...prevMessages, responseMsg];
      });
    }, 1000);
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",

        bgcolor: "background.paper",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #eee",
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Badge
            color="warning"
            variant="dot"
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
          ></Badge>

          <Typography>open</Typography>
          <Typography variant="body1" fontWeight="bold">
            [Ticket#1781053] hi
          </Typography>
        </Box>
        <Button
          startIcon={<CancelOutlined />}
          variant="outlined"
          size="small"
          onClick={() => console.log("Close Ticket")}
        >
          Close
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: "auto",
          bgcolor: "#f9f9f9",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              alignSelf: message.type === "sent" ? "flex-end" : "flex-start",
              maxWidth: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: message.type === "sent" ? "flex-end" : "flex-start",
            }}
          >
            {/* Message */}
            <Paper
              elevation={1}
              sx={{
                p: 1.5,
                borderRadius: "10px",
                backgroundColor: message.type === "sent" ? "#d1f7c4" : "#fff",
                color: "#333",
              }}
            >
              <Typography variant="body2">{message.content}</Typography>
            </Paper>

            {/* Time */}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              {message.time}
            </Typography>

            {/* Response */}
            {messages
              .filter((m) => m.responseTo === message.id)
              .map((response) => (
                <Box
                  key={response.id}
                  sx={{
                    alignSelf: "flex-start",
                    mt: 1,
                    maxWidth: "70%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                      color: "#333",
                    }}
                  >
                    <Typography variant="body2">{response.content}</Typography>
                  </Paper>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {response.time}
                  </Typography>
                </Box>
              ))}
          </Box>
        ))}
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          p: 2,

          bgcolor: "#f6faff",
        }}
      >
        <TextField
          fullWidth
          placeholder="Type a message"
          multiline
          maxRows={3}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <AttachFileIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" onClick={handleSend}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#fff",
              borderRadius: "10px",
              border: "1px solid lightgrey",
              "&:hover": {
                border: "1px solid #888",
              },
              "&.Mui-focused": {
                border: "1px solid #888",
                boxShadow: "none",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SupportTicket;
