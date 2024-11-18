import React from 'react';
import { Link } from 'react-router-dom';
import user from '../Images/user.png';

const Contactcard = ({ contact, clickhandler }) => {
    const { id, name, email } = contact;

    return (
        <div className="item" style={{ padding: "10px" }}>
            <div className="ui card" style={{ width: "100%", padding: "10px" }}>

                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img
                        src={user}
                        alt="User"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid #eee'
                        }}
                    />
                </div>

                <div className="content">
                    <Link to={`/contact/${id}`} >
                        <div className="header" style={{ fontSize: "1.2em", color: "teal" }}>
                            {name}
                        </div>
                        <div className="meta" style={{ marginTop: "5px", color: "gray" }}>
                            {email}
                        </div>
                    </Link>
                </div>

                <div className="extra content" style={{ textAlign: "right" }}>
                    <i
                        className="trash alternate outline icon"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => clickhandler(id)}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default Contactcard;
