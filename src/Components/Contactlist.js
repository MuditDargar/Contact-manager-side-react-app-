import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Contactcard from './Contactcard';

const Contactlist = (props) => {
    const deleteContactHandler = (id) => {
        props.getcontactid(id);
    };

    const renderContactList = props.contacts.map((contact) => (
        <Contactcard
            contact={contact}
            clickhandler={deleteContactHandler}
            key={contact.id}
        />
    ));

    return (
        <div className="ui container" style={{ marginTop: '100px' }}>
            <div className="ui grid">
                <div className="row">
                    <div className="eight wide column">
                        <h2 className="ui header">Contact List</h2>
                    </div>
                    <div className="eight wide column">
                        <Link to="/add">
                            <button className="ui button teal right floated">Add Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
};

export default Contactlist;
