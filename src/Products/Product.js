import React, { useContext } from "react"
import { Row, Container, Col, Button } from "react-bootstrap";
import ProductList from './ProdutList';
import Econtext from "../store/ecom-context";
import { useNavigate } from 'react-router-dom'
const Product = (props) => {
    const ctx = useContext(Econtext)
    const productsArr = [

        {
            id: 'e1',
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {
            id: 'e2',
            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {
            id: 'e3',
            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: 'e4',
            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]
    const Navigate = useNavigate();
    const CartShowHandler = () => {
        Navigate(`/Login/Cart/${ctx.token}`)
        ctx.onShowCart()
    }

    return (
        <>
            <div className="container">
                <h2 style={{ textAlign: 'center', padding: '40px' }}>PRODUCTS</h2>
            </div>
            <Container>
                <Row className="d-flex justify-content-center" style={{ gridColumnGap: '200px', gridRowGap: '100px' }}>
                    {productsArr.map((item) => (
                        <Col lg={3} md={12}
                            key={item.id} >
                            <ProductList id={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <div style={{ textAlign: 'center', padding: '40px' }}>
                <Button variant="secondary" style={{ color: '#56CCF2' }} onClick={CartShowHandler} >See the cart</Button>
            </div>

        </>
    )
}
export default Product;