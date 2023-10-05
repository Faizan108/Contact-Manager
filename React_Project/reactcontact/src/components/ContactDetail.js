import React from 'react';
import user from '../images/Faizan.jpg';
import './main.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const ContactDetail=(props)=>{
    const location = useLocation();
    const {id,name,email}=location.state.contact;
    console.log(location.state.contact)
    return(
        <div className="main">
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt="user" />
                </div>
                <div className='content' style={{height:"60px"}}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <div className='center-div back'>
                <Link to="/"><button className='ui button blue center floated'>Back to Contact List</button></Link>
            </div>
        </div>    
    );
}

export default ContactDetail;