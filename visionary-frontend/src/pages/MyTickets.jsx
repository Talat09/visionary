import { useEffect, useState } from "react";
import { Page, Layout } from "@shopify/polaris";

import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import { getMyTickets } from "../api";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getMyTickets();
      setTickets(tickets);
    };
    fetchTickets();
  }, []);

  const handleTicketCreated = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <Page title="My Tickets">
      <Layout>
        <Layout.Section>
          <TicketForm onTicketCreated={handleTicketCreated} />
          <TicketList tickets={tickets} />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default MyTickets;
