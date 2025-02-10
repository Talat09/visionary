import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"; // Updated import
import MyTickets from "./pages/MyTickets";
import AdminTickets from "./pages/AdminTickets"; // Updated import
import { AppProvider } from "@shopify/polaris";

const App = () => {
  return (
  
      <AppProvider >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/admin-tickets" element={<AdminTickets />} />
          </Routes>
        </Router>{" "}
      </AppProvider>
  
  );
};

export default App;
