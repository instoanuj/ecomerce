import React from "react";
import { Button, Table, Navbar, Image } from "react-bootstrap";
import play from '../Images/pl.png';

const Home = () => {
    return (
        <>
            <Navbar bg="secondary" style={{ justifyContent: 'center', flexWrap: "wrap" }}>
                <div className="d-grid gap-2">
                    <Button size='lg' variant="outline-info">Get our Latest Album</Button>

                    <Button variant="none"><Image src={play} /></Button>

                </div>
            </Navbar>
            <div className="container">
                <h2 style={{ padding: '0px', fontSize: '30px', textAlign: 'center' }}>Tours</h2>
            </div>
            <div style={{ padding: '20px 30px' }}>
                <Table bordered >
                    <tbody>
                        <tr>
                            <td>JUL 16</td>
                            <td>DETROIT, MI</td>
                            <td>DTE ENERGY MUSIC THEATRE</td>
                            <td><Button size="lg" active variant="info">Buy tickets</Button></td>
                        </tr>
                        <tr>
                            <td>JUL 19</td>
                            <td>TORONTO,ON</td>
                            <td>BUDWEISER STAGE</td>
                            <td><Button size="lg" active variant="info">Buy tickets</Button></td>
                        </tr>
                        <tr>
                            <td>JUL 22</td>
                            <td>DETROIT</td>
                            <td>JIGGY LUBE LIVE</td>
                            <td><Button size="lg" active variant="info">Buy tickets</Button></td>
                        </tr>
                        <tr>
                            <td>JUL 29</td>
                            <td>PHOENIX, AZ</td>
                            <td>AK-CHIN PAVILION</td>
                            <td><Button size="lg" active variant="info">Buy tickets</Button></td>
                        </tr>
                        <tr>
                            <td>AUG 2</td>
                            <td>LAS VEGAS, NV</td>
                            <td>T-MOBILE ARENA</td>
                            <td><Button size="lg" active variant="info">Buy tickets</Button></td>
                        </tr>
                        <tr>
                            <td>AUG 7</td>
                            <td>CONCORD, CA</td>
                            <td>CONCORD PAVILION</td>
                            <td><Button size="lg" active variant="info">Buy tickets</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default Home;