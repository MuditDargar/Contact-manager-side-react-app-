import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { v4 as uuid } from 'uuid';
import Addcontact from './Addcontact';
import Contactlist from './Contactlist';
import Contactdetails from './Contactdetails';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState(() => {

    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const addcontacthandler = (contact) => {

    if (contact.name && contact.email) {
      const newcontacts = [...contacts, { id: uuid(), ...contact }];
      setcontacts(newcontacts);

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newcontacts));
    }
    else {
      alert('Please enter both name and email');
    }
  };

  const removecontacthandler = (id) => {
    const newcontacts = contacts.filter((contact) => {
      return contact.id !== id;

    });
    setcontacts(newcontacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newcontacts));
  }
  useEffect(() => {
    const retrivecontacts = localStorage.getItem(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivecontacts) {
      setcontacts(JSON.parse(retrivecontacts));
    }
  }, [])

  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          {/* Route to Add Contact page */}
          <Route path='/add' exact element={
            <Addcontact contacts={contacts} addcontacthandler={addcontacthandler} />
          } />
          {/* Default Route to Contact List page */}
          <Route path='/' exact
            element={<Contactlist getcontactid={removecontacthandler} contacts={contacts} />} />

          {/* Route to Contact Details page */}
          <Route path='/contact/:id' exact element={<Contactdetails contact={contacts} />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
