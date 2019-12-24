import Link from 'next/link'
import Layout from "../components/layout";
import Button from 'react-bootstrap/Button';

export default () => (
  <Layout>
    This is a static page goto{' '}
    <Link href="/">
      <Button>dynamic</Button>
    </Link>{' '}
    page.
  </Layout>
)
