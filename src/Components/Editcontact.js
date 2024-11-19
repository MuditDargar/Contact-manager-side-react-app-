import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editcontact = ({ addcontacthandler }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    let update = (e) => {
        e.preventDefault();
        if (name === " " || email === " ") {
            alert('Please enter both name and email');
            return;
        }
        addcontacthandler({ name, email });
        setName('');
        setEmail('');
        navigate('/');
    };

    return (
        <div className="ui container" style={{ paddingTop: "100px" }}>
            <div className="ui raised segment">
                <h2 className="ui teal header">
                    <i className="address book icon"></i>
                    Add Contact
                </h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>
                            <i className="user icon"></i> Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter full name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>
                            <i className="envelope icon"></i> Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="ui teal button">
                        <i className="paper plane icon"></i>
                        Add
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Editcontact;
