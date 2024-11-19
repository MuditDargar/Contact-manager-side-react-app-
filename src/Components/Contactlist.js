import React, { useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Contactcard from './Contactcard';

const Contactlist = (props) => {

    const inputel = useRef("");
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
    const getsearchterm = () => {
        props.searchKeyword(inputel.current.value);
    };

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
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputel} type="text" placeholder="Search Contacts" className='prompt' value={props.term} onChange={getsearchterm} />
                    <i className="search icon "></i>
                </div>
            </div>

            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : " No contacts available"}
            </div>
        </div>
    );
};

export default Contactlist;
