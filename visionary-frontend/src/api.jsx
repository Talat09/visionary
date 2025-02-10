import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust based on your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const createTicket = (data) => api.post("/tickets", data);
export const getMyTickets = () => api.get("/tickets/my-tickets");
export const getAllTickets = () => api.get("/tickets");
export const updateTicketStatus = (id, status) =>
  api.patch(`/tickets/${id}`, { status });
