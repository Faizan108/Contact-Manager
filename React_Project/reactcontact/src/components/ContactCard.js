import React from "react";
import { Link } from "react-router-dom";
import "./ContactCard.css";
// import user from '../images/Faizan.jpg';
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  console.log(props.contact)
  return (
    <div className="item">
      {/* <img className="ui avatar image" src={user} alt="user" /> */}

      <div className="content">
        <Link to={`/contact/${id}`} state={{contact:props.contact}}>
          <div className="header" style={{color:"black"}}>{name}</div>
          <div style={{ display: "inline-block", color:"#0505f9" }}>{email}</div>
        </Link>
        <i
          className="trash alternate outline icon right floated hov"
          style={{ color: "red" }}
          onClick={() => props.clickHandler(id)}
          key={id}
        ></i>
        <Link to={"/edit"} state={{ contact:props.contact }}>
        <i
          className="edit alternate outline icon right floated hov"
          style={{ color: "blue" }}
        ></i></Link>
      </div>
    </div>
  );
};

export default ContactCard;
