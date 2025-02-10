/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, FormLayout, TextField } from "@shopify/polaris";
import { createTicket } from "../api";

const TicketForm = ({ onTicketCreated }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const ticket = await createTicket({ subject, description });
    onTicketCreated(ticket);
    setSubject("");
    setDescription("");
  };

  return (
    <Card sectioned>
      <FormLayout>
        <TextField
          label="Subject"
          value={subject}
          onChange={(value) => setSubject(value)}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(value) => setDescription(value)}
          multiline
        />

        <Button primary onClick={handleSubmit}>
          Create Ticket
        </Button>
      </FormLayout>
    </Card>
  );
};

export default TicketForm;
