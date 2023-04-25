import React, { useContext } from 'react';
import { Card, Image } from 'react-bootstrap';
import Econtext from '../store/ecom-context';
import classes from './Account.module.css';
import user from '../Images/user.png';
const Account = () => {
    const ctx = useContext(Econtext)
    return (
        <div className={classes.div}>
            <Card>
                <Card.Body>
                    <Image src={user} roundedCircle />
                    <Card.Title>Profile</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ctx.email}</Card.Subtitle>
                    <Card.Text>{ }</Card.Text>
                    <Card.Link href=''></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Account;