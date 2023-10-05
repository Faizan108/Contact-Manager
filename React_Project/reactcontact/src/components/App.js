import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "../api/contact";
import AddContact from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  // const LOCAL_STORAGE_KEY="contacts"
  const [contacts, setContacts] = useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const [searchResult,setSearchResult]=useState([]);
  console.log(contacts);
  const addContactHandler = async (contact) => {
    console.log(contact);
    // console.log(uuid());
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
    console.log("h");
  };

  // const updateContactHandler=async (contact)=>{
  //   const response=await api.put(`/contacts/${contact.id}`,contact);
  //   const {id,name , email}=response.data;
  //   setContacts(contact.map((contact)=>{
  //     return contact.id===id?{...response.data}:contact;
  //   }))
  // }
  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm);
    if (searchTerm!==""){
      const newContactList=contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }
    
  }

  const retrieveContact = async () => {
    console.log("hey");
    const response = await api.get("/contacts");
    console.log(response);
    return response;
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const getallcontacts = async () => {
      const allcontacts = await retrieveContact();

      if (allcontacts) setContacts(allcontacts.data);
    };
    getallcontacts();
  }, []);

  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  // },[contacts])
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/edit" element={<EditContact />} />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={searchTerm.length < 1?contacts:searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />

          <Route path="/contact/:id" element={<ContactDetail />} />

          {/* <Route> <AddContact addContactHandler={addContactHandler}/></Route>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
