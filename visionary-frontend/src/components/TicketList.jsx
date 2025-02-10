/* eslint-disable react/prop-types */
import { Card, BlockStack, Select, Text } from "@shopify/polaris";

const TicketList = ({ tickets = [], onUpdateStatus }) => {
  return (
    <Card sectioned>
      {tickets?.data?.length > 0 ? (
        tickets.data.map((ticket) => (
          <BlockStack vertical key={ticket.id}>
            <Text variant="headingMd" as="h3">
              {ticket.subject}
            </Text>
            <Text as="p">{ticket.description}</Text>
            <Text as="p">Status: {ticket.status}</Text>
            {onUpdateStatus && (
              <Select
                label="Update Status"
                options={[
                  { label: "Open", value: "Open" },
                  { label: "Resolved", value: "Resolved" },
                  { label: "Closed", value: "Closed" },
                ]}
                value={ticket.status}
                onChange={(value) => onUpdateStatus(ticket.id, value)}
              />
            )}
          </BlockStack>
        ))
      ) : (
        <Text as="p">No tickets found.</Text>
      )}
    </Card>
  );
};

export default TicketList;