
import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Econtext from '../store/ecom-context';
import classes from './CartItem.module.css';
import axios from 'axios';
const CartItem = props => {
    const ctx = useContext(Econtext)
    const onAddHandler = async () => {
        const productObj = {
            title: props.title,
            price: Number(props.price),
            imageUrl: props.imageUrl,
            amount: Number(props.amount + 1)
        }

        try {
            const response = await axios.put(`https://react-app-cd331-default-rtdb.firebaseio.com/${ctx.email}/${props.id}.json`, productObj)
            ctx.onShowCart()
            console.log(response.data)
        } catch (error) {
            alert(error.response.data.error.message)
        }
    }

    const onRemoveHandler = async () => {
        const productObj = {
            title: props.title,
            price: Number(props.price),
            imageUrl: props.imageUrl,
            amount: Number(props.amount - 1)
        }

        try {
            const response = await axios.put(`https://react-app-cd331-default-rtdb.firebaseio.com/${ctx.email}/${props.id}.json`, productObj)
            ctx.onShowCart()
        } catch (error) {
            alert(error.response.data.error.message)
        }
    }
    return (
        <>
            <hr />
            <Row key={props.id} className="justify-content-center align-items-center">
                <Col><p>{props.title}</p>
                    <img
                        className={`rounded border shadow ${classes.cart_product_image}`}
                        src={props.imageUrl}
                        alt="Your items added to cart"
                    />
                </Col>
                <Col>
                    <h3 className="fw-bold">
                        Q{props.amount}
                        <button onClick={onAddHandler}>+</button>
                        <button onClick={props.amount > 1 ? onRemoveHandler : props.onRemove}>-</button>
                    </h3>
                </Col>
                <Col>
                    <h3 className="fw-bold">${props.price} </h3>
                    <Button onClick={props.onRemove} variant="danger">
                        Remove
                    </Button>
                </Col>
            </Row>
        </>
    )
}
export default CartItem;