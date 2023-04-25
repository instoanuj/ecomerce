import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Header = () => {
    return (
        <>
            <Navbar bg="secondary" variant="">
                <Nav className="mx-auto">
                    <Nav.Item>
                        <Navbar.Brand style={{
                            fontSize: '60px',
                            fontWeight: 'bold',
                            color: 'white',
                            margin: 'auto'
                        }} >The Generics</Navbar.Brand>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}
export default Header;