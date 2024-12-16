import Ticket from "../models/ticketModel.js";

// Create a new ticket
export const createTicket = async (req, res) => {
  try {
    const { userId, subject } = req.body;
    const ticket = await Ticket.create({ userId, subject });
    res.status(201).json({ message: "Ticket created successfully", ticket });
  } catch (error) {
    res.status(500).json({ error: "Error creating ticket" });
  }
};

// Get tickets by userId (for users) or all tickets (for admin)
export const getTickets = async (req, res) => {
  try {
    const { id, role } = req.user;
    const userId = id;

    const query = role === "admin" ? {} : { userId };
    const tickets = await Ticket.find(query).sort({ updatedAt: -1 });
    res.status(200).json({ tickets });
  } catch (error) {
    res.status(500).json({ error: "Error fetching tickets" });
  }
};

// Update ticket status
export const updateTicketStatus = async (req, res) => {
  try {
    const { ticketId, status } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    );
    res.status(200).json({ message: "Ticket updated successfully", ticket });
  } catch (error) {
    res.status(500).json({ error: "Error updating ticket" });
  }
};


export const closeTicket = async (req, res) => {
  try {
    const { ticketId } = req.body;

    // Update the ticket status to "closed"
    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status: "closed" },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    res.status(200).json({ message: "Ticket closed successfully!", ticket });
  } catch (error) {
    res.status(500).json({ error: "Error closing the ticket. Please try again." });
  }
};
