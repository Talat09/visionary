import { useEffect, useState } from "react";
import { Page, Layout } from "@shopify/polaris";

import TicketList from "../components/TicketList";
import { getAllTickets, updateTicketStatus } from "../api";

const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getAllTickets();
      setTickets(tickets.data);
    };
    fetchTickets();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    console.log("id:", id, status);
    await updateTicketStatus(id, status);
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status } : ticket
      )
    );
  };
  console.log("ticket from admin:", tickets);
  return (
    <Page title="All Tickets">
      <Layout>
        <Layout.Section>
          <TicketList tickets={tickets} onUpdateStatus={handleUpdateStatus} />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default AdminTickets;
