import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Header } from 'semantic-ui-react';
import user from '../Images/user.png';

const Contactdetails = ({ contact }) => {
    return (
        <div className="main" style={{ display: 'flex', justifyContent: 'center', marginTop: '120px' }}>
            <Card centered>
                <Image src={user} alt="user" wrapped ui={false} />
                <Card.Content>
                    <Link to={`/contact/${contact.id}`} style={{ textDecoration: 'none' }}>
                        <Header as="h2" textAlign="center" style={{ marginBottom: '10px' }}>
                            mudit dargar
                        </Header>
                        <Card.Meta textAlign="center" style={{ fontSize: '14px', color: 'gray' }}>
                            bandabadiya@gmail.com
                        </Card.Meta>
                    </Link>
                </Card.Content>
                <Card.Content extra textAlign="center">
                    <Link to="/" className="ui teal button">
                        <i className="arrow left icon"></i>
                        Back to Contacts
                    </Link>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Contactdetails;
