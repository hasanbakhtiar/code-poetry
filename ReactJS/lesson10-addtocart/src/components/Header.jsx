import { Button, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import slug from 'react-slugify';
import Modal from 'react-bootstrap/Modal';


const Header = () => {
    const { totalItems } = useCart();
    const [productdata] = useContext(ProductContext);
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

                    <div>


                        <Button variant="primary mx-3" onClick={handleShow}>
                            <FaSearch />
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Search area</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div className="input-group mb-3">
                                    <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product" />
                                    <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                                </div>

                                <ListGroup>
                                    {!query ? "" : productdata.filter(p => p.title.toLocaleLowerCase().includes(query)).map(item => (

                                        <Link to={`/products/${slug(item.title)}`} onClick={()=>{handleClose()}}><ListGroup.Item><img width={70} src={item.images[0]} className='me-4' />{item.title}</ListGroup.Item></Link>
                                    ))}
                                </ListGroup>
                            </Modal.Body>

                        </Modal>


                    </div>


                    <Link to="/cart" className="btn btn-primary position-relative">
                        <FaCartShopping />

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {totalItems}
                        </span>
                    </Link>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header