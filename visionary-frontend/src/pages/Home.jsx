
import { Page, Layout, Card, Button } from '@shopify/polaris';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Page title="Welcome to the Ticket Management System">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Link to="/login">
              <Button primary>Login</Button>
            </Link>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Home;