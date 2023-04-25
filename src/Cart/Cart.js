import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItem from './CartItem';
import UICard from '../UI/UICard';
import Econtext from '../store/ecom-context';
const Cart = () => {
    const ctx = useContext(Econtext);
    const totalAmount = `$${ctx.totalAmount}`
    const remoCartItemHandler = (id) => {
        ctx.onRemoveProd(id)
    }
    return (
        <>
            <section className="h-100 text-center w-100 mt-3" id="cart">
                <h1
                    className="text-center fw-bold mb-5"
                    style={{ fontFamily: "Metal Mania" }}
                >
                    Shopping Cart
                </h1>
                {ctx.cart.length === 0 &&
                    <Container className="rounded p-4 mb-4 shadow w-75">
                        <h2>Cart is Empty..</h2>
                    </Container>
                }
                {ctx.cart.length !== 0 && <Container>

                    <Container className="rounded p-4 mb-4 shadow w-75">

                        <Row className="align-items-center">
                            <Col>
                                <h2 className="fw-bold">Total Amount: </h2>
                            </Col>
                            <Col>
                                <h2 className="fw-bold">{totalAmount}</h2>
                            </Col>
                        </Row>
                    </Container>
                    <UICard className="m-auto">
                        <Container sm={2} md={3}>
                            <Row>
                                <Col>
                                    <h3 className="fw-bold">Item</h3>
                                </Col>
                                <Col>
                                    <h3 className="fw-bold">Quantity</h3>
                                </Col>
                                <Col>
                                    <h3 className="fw-bold">Price</h3>
                                </Col>
                            </Row>
                            {ctx.cart.map((item, index) => (

                                <CartItem key={index} title={item.title} price={item.price} id={item.id} amount={item.amount} imageUrl={item.imageUrl} onRemove={remoCartItemHandler.bind(null, item.id)}
                                />
                            ))}
                        </Container>
                    </UICard>
                    <Container className="rounded p-4 mb-4 shadow w-75">
                        <Button varient="info">PURCHASE</Button>
                    </Container>
                </Container>}
            </section>
        </>
    )
}
export default Cart;
