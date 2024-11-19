import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { v4 as uuid } from 'uuid';
import Addcontact from './Addcontact';
import Contactlist from './Contactlist';
import Contactdetails from './Contactdetails';
import EditContactWrapper from './Editcontact';
import api from '../api/contacts';



function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState(() => {

    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [searchterm, setsearchterm] = useState("");
  const [searchresult, setsearchresult] = useState([]);

  //  Retrive contact from db.json which url present in api/contacts
  const retrivecontacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }




  const addcontacthandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request)
    const newcontacts = [...contacts, response.data];
    setcontacts(newcontacts);
  };

  const updatecontacthandler = async (contact) => {
    await api.put(`/contacts/${contact.id}`, contact);
    const updatedContacts = contacts.map((c) => (c.id === contact.id ? contact : c));
    setcontacts(updatedContacts);
  }

  const removecontacthandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newcontacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(newcontacts);
  }

  const searchhandler = (searchterm) => {
    setsearchterm(searchterm);
    if (searchterm !== " ") {
      const filtered = contacts.filter((contact) => {

        return Object.values(contact).join(" ").toLowerCase().includes(searchterm.toLowerCase())
      });
      setsearchresult(filtered);
    }
    else {
      setsearchresult(contacts);
    }
  }

  // useEffect(() => {
  //   const retrivecontacts = localStorage.getItem(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrivecontacts) {
  //     setcontacts(JSON.parse(retrivecontacts));
  //   }
  // }, [])

  useEffect(() => {
    const getallcontact = async () => {
      const allcontacts = await retrivecontacts();
      if (allcontacts) {
        setcontacts(allcontacts);
      }
    }
    getallcontact();
  }, [])

  useEffect(() => {

    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
          <Route
            path="/edit"
            element={<EditContactWrapper updatecontacthandler={updatecontacthandler} />}
          />

          {/* Default Route to Contact List page */}
          <Route path='/' exact
            element={<Contactlist getcontactid={removecontacthandler} contacts={searchterm.length < 1 ? contacts : searchresult} term={searchterm} searchKeyword={searchhandler} />} />

          {/* Route to Contact Details page */}
          <Route path='/contact/:id' exact element={<Contactdetails />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
