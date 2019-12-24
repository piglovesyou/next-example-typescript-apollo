import Button from "react-bootstrap/Button";
import Layout from "../components/layout";
import withGraphQL from '../schema/with-graphql'
import Link from 'next/link'
import {useViewerQuery} from "./viewer.graphql";

const Index = () => {
  const {
    data,
  } = useViewerQuery();

  if (data) {
    const {viewer} = data;
    return (
      <Layout>
        You're signed in as {viewer.name} and you're {viewer.status} goto{' '}
        <Link href="/about">
          <Button>static</Button>
        </Link>{' '}
        page.
      </Layout>
    )
  }

  return <div>...</div>;
}

export default withGraphQL(Index)
