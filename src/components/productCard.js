import {Card, Button, Form, Row, Col } from 'react-bootstrap'

function ProductCard(props) {
 
    return (
        <Card>
            <Card.Body>
                <Card.Title>{Product.title}</Card.Title>
                <Card.Text>${Product.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    ) 
}

export default ProductCard