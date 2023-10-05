import React from 'react';
import {Link} from 'react-router-dom';
import './main.css';
// import {useLocation} from 'react-router-dom';
class EditContact extends React.Component{
   
    state={
        name:"",
        email:""
    }

    // location = useLocation();
    // constructor(props) {
        // console.log(contact);
        // super(props);
        // console.log(props);
        // const {id,name,email}=this.props.state.contact;
        // this.state = {
        //   id,
        //   name,
        //   email,
        // };
    //   }
    
    update=(e)=>{
        e.preventDefault();
        console.log(this.state);
        if(this.state.name===""|| this.state.email==="")
        {
            alert("All the field are mandatory")
            return;
        }
        this.props.updateContactHandler(this.state);
       this.setState({name:"",email:""});
       
    }
    render(){
        return(
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Name' onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder='Email' onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}/>
                    </div>
                    <button className="ui button green">Update</button>
                    <Link to="/"> <button class="ui button red right floated">Contact List</button></Link>
                </form>
            </div>
        );
    }
}

export default EditContact;