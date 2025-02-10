const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();
const prisma = new PrismaClient();

// Create Ticket
router.post("/", authenticate, async (req, res) => {
  if (req.user.role !== "customer")
    return res.status(403).json({ message: "Unauthorized" });

  const { subject, description } = req.body;
  const ticket = await prisma.ticket.create({
    data: { subject, description, customerId: req.user.id },
  });

  res.status(201).json(ticket);
});

// Get all tickets (Admin)
router.get("/", authenticate, async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Unauthorized" });

  const tickets = await prisma.ticket.findMany({ include: { customer: true } });
  res.json(tickets);
});

// Get user tickets (Customer)
router.get("/my-tickets", authenticate, async (req, res) => {
  if (req.user.role !== "customer")
    return res.status(403).json({ message: "Unauthorized" });

  const tickets = await prisma.ticket.findMany({
    where: { customerId: req.user.id },
  });
  res.json(tickets);
});

// Update Ticket Status (Admin)
router.patch("/:id", authenticate, async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Unauthorized" });

  const { status } = req.body;
  const ticket = await prisma.ticket.update({
    where: { id: parseInt(req.params.id) },
    data: { status },
  });

  res.json(ticket);
});

module.exports = router;
