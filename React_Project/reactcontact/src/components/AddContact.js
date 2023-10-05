import React from 'react';
import {Link} from 'react-router-dom';
import './main.css';
class AddContact extends React.Component{
    state={
        name:"",
        email:"",
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       name:"",
    //       email:""
    //     };
    //   }
    add=(e)=>{
        e.preventDefault();
        console.log(this.state);
        if(this.state.name===""|| this.state.email==="")
        {
            alert("All the field are mandatory")
            return;
        }
        this.props.addContactHandler(this.state);
       this.setState({name:"",email:""});
       
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Name' onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder='Email' onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}/>
                    </div>
                    <button className="ui button green">Add</button>
                    <Link to="/"> <button class="ui button red right floated">Contact List</button></Link>
                </form>
            </div>
        );
    }
}

export default AddContact;