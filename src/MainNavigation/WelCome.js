import React, { useContext } from 'react';
import { Navbar, Nav, Badge, Image } from 'react-bootstrap';
import Econtext from '../store/ecom-context';
import user from '../Images/user.png';
import { NavLink } from 'react-router-dom';


function WelCome() {
    const ctx = useContext(Econtext);
    let totalQuantity = ctx.cart.reduce((currentValue, product) => {
        return currentValue += product.amount;
    }, 0)

    const logoutHandler = () => {
        ctx.logout();
    }
    const ShowCartItemsHandler = () => {
        ctx.onShowCart()
    }

    return (

        <Navbar bg="dark" variant="dark">
            <Nav className="me-auto">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/About' >About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/ContactUs' >ContactUs</Nav.Link>
                </Nav.Item>
                {!ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/Login' >Login</Nav.Link>
                </Nav.Item>}
                {!ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/Signup' >Signup</Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to={`/Login/Product/${ctx.token}`} >Store</Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/' onClick={logoutHandler} >Logout</Nav.Link>
                </Nav.Item>}
            </Nav>
            <Nav className='ms-auto' style={{ gap: '2rem' }}>
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to={`/Login/Cart/${ctx.token}`} onClick={ShowCartItemsHandler}>
                        Cart
                        <Badge bg="light" style={{
                            position: 'absolute', color: '#56CCF2',
                            fontSize: '15px'
                        }}>{totalQuantity}</Badge>

                    </Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to={`/Login/${ctx.email}`}><Image style={{ width: '20px' }} src={user} roundedCircle /> {ctx.email} </Nav.Link>
                </Nav.Item>}
            </Nav>
        </Navbar>

    );
}

export default WelCome;