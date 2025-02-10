import { useState } from "react";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Button,
  Select,
} from "@shopify/polaris";

import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await registerUser({ fullName, email, password, role });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Page title="Register">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Full Name"
                value={fullName}
                onChange={(value) => setFullName(value)}
              />
              <TextField
                label="Email"
                value={email}
                onChange={(value) => setEmail(value)}
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(value) => setPassword(value)}
              />
              <Select
                label="Role"
                options={[
                  { label: "Customer", value: "customer" },
                  { label: "Admin", value: "admin" },
                ]}
                value={role}
                onChange={(value) => setRole(value)}
              />
              <Button primary onClick={handleSubmit}>
                Register
              </Button>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Registration;
