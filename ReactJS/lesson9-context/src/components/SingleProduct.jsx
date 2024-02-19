import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import slug from 'react-slugify';
const SingleProduct = ({ title, photo, id, desc }) => {
    return (
        <Col sm={12} md={4}>
            <Card >
                <Card.Img variant="top" height={300}  style={{objectFit:'contain'}} src={photo[0]} />
                <Card.Body>
                    <Card.Title>{title.slice(0,10)}...</Card.Title>
                    <Card.Text>
                        {desc.slice(0,130)}...
                    </Card.Text>
                    <Link to={`/products/${slug(title)}`}><Button variant="outline-primary">View more</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct