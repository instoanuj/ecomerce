import React from "react";
import spoo from '../Images/SpotifyLogo.png';
import face from '../Images/FacebookLogo.png';
import { Navbar, Nav, Image } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Navbar bg="secondary" >
                <Nav className="me-auto">
                    <Navbar.Brand style={{
                        fontSize: '50px',
                    }}>The Generics</Navbar.Brand>
                </Nav>
                <Nav className="ms-auto" style={{ gap: '2rem' }}>
                    
                    
                    <Nav.Item>
                        <Nav.Link href="https://spotify.com/">
                            <Image src={spoo} style={{ width: '40px' }} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://facebook.com/">
                            <Image src={face} style={{ width: '40px' }} />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </footer>
    )
}
export default Footer;