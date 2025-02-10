import { useState } from "react";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Button,
} from "@shopify/polaris";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await loginUser({ email, password });
      console.log("response", response);
      if (response && response?.data?.token) {
        localStorage.setItem("token", response?.data?.token);
        navigate(
          response?.data?.user?.role === "admin" ? "/admin-tickets" : "/my-tickets"
        );
      } else {
        console.error("Invalid response from server:", response);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Page title="Login">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
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
              <Button primary onClick={handleSubmit}>
                Login
              </Button>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Login;
