import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

class EditContact extends React.Component {
    constructor(props) {
        super(props);
        const { id, name, email } = props.location.state.contact; // Retrieve contact from router state
        this.state = {
            id,
            name,
            email,
        };
    }

    update = (e) => {
        e.preventDefault();
        const { name, email } = this.state;
        if (name.trim() === '' || email.trim() === '') {
            alert('Please enter both name and email');
            return;
        }
        this.props.updatecontacthandler({ id: this.state.id, name, email });
        this.props.navigate('/'); // Redirect to the main page
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { name, email } = this.state;

        return (
            <div className="ui container" style={{ paddingTop: '100px' }}>
                <div className="ui raised segment">
                    <h2 className="ui teal header">
                        <i className="address book icon"></i>
                        Edit Contact
                    </h2>
                    <form className="ui form" onSubmit={this.update}>
                        <div className="field">
                            <label>
                                <i className="user icon"></i> Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Enter full name"
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button className="ui teal button">
                            <i className="save icon"></i>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

// Wrapper to inject routing props into the class component
const EditContactWrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return <EditContact {...props} navigate={navigate} location={location} />;
};

export default EditContactWrapper;
