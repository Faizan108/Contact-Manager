import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import "./main.css";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getContactId(id);
  };
  const inputEl=useRef("");
  // const contacts=[{
  //     id:1,
  //     name:"faizan",
  //     email:"faizansaifi@gmail.com"
  // }]
  const getSearchTerm=()=>{
    props.searchKeyword(inputEl.current.value);
  }
  const renderContactList = props.contacts?.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContact}
        key={contact.id}
      ></ContactCard>
    );
  });
  return (
    <>
      <div className="main">
        <h2>Contact List</h2>
        <div className="ui search">
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
            ref={inputEl}
              type="text"
              placeholder="Serch Contact"
              className="prompt"
              style={{ border: "1px solid black" }}
              value={props.term}
              onChange={getSearchTerm}
            />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="ui celled list">{renderContactList.length>0?renderContactList:"No Contacts Avialable"}</div>
        <Link to="/add">
          
          <button className="ui button red left floated">Add Contact</button>
        </Link>
      </div>
    </>
  );
};

export default ContactList;
