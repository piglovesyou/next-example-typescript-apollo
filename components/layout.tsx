import { NextPage } from "next";
import Container from "react-bootstrap/Container";
import '../theme.scss'

const Layout: NextPage = (props) => <Container>{props.children}</Container>
export default Layout
