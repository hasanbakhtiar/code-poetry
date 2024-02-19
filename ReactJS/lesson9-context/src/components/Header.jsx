import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Best Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link>Product</Nav.Link>
                        </LinkContainer>


                    </Nav>
                    <LinkContainer to="/login">
                        <Button variant="warning">Login</Button>
                    </LinkContainer>
                    <div id="google_translate_element"></div>
                        <button id="translateButton">Translate</button> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header