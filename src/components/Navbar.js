import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import {CartProduct} from "./CartProduct"
function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Emvicks store</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <button onClick={handleShow}>Cart  ({productsCount} Items)</button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {productsCount > 0 ?
                <>
                    <p>Items in your cart: </p>
                    {cart.items.map((currentProduct, idx) =>(
                       
                        <CartProduct key={idx} id = {currentProduct.id}  quantity={currentProduct.quantity}> </CartProduct>
                    ))}
                    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                    <Button varient="success">Purchase items</Button>
                </>
                :
                <h1> there are no items in your card</h1>

                }
                   
                </Modal.Body>
            </Modal>
        </>
    )

}

export default NavbarComponent;