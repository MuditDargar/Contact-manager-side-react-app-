import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, Image, Header } from 'semantic-ui-react';
import user from '../Images/user.png';

const Contactdetails = () => {
    const location = useLocation();
    const { contact } = location.state || [];
    if (!contact) {
        return (
            <div className="main" style={{ textAlign: 'center', marginTop: '120px' }}>
                <h2>Contact details not available.</h2>
                <Link to="/" className="ui teal button" style={{ marginTop: '20px' }}>
                    <i className="arrow left icon"></i>
                    Back to Contacts
                </Link>
            </div>
        );
    }
    const { name, email } = contact;

    return (
        <div className="main" style={{ display: 'flex', justifyContent: 'center', marginTop: '120px' }}>
            <Card centered>
                <Image src={user} alt="user" wrapped ui={false} />
                <Card.Content>

                    <Header as="h2" textAlign="center" style={{ marginBottom: '10px' }}>
                        {name}
                    </Header>
                    <Card.Meta textAlign="center" style={{ fontSize: '14px', color: 'gray' }}>
                        {email}
                    </Card.Meta>

                </Card.Content>

                <Link to="/" className="ui teal button">
                    <i className="arrow left icon"></i>
                    Back to Contacts
                </Link>

            </Card>
        </div>
    );
};

export default Contactdetails;
