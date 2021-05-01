/* eslint-disable */
import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "../forms/RegistrationForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';
import myVideo from './vid1.mp4';



class SignUp extends React.Component{



//Gets the data and sumbits it for a post request
submit = data => {

  axios.post('http://localhost:3333/register',{
    name:data.username,
    email:data.email,
    password:data.password,
    admin:data.admin
  })
  .then(function(response){


    //This is responsible for the page navigation.
    response.data.success
    ?  (document.getElementById('status').innerHTML = "Registration Successfull! You are being redirected to login in 5 seconds.",setTimeout(() => {window.location.replace('/login')},5000))
    : document.getElementById('status').innerHTML = response.data.message
  });
};



render(){

  //alert("Response is : " + this.state.response);
  return(

    <div align="top">
       <video src={myVideo} type="video/mp4" autoPlay muted loop/>
      <center>
        <br/><br/><br/><br/>
      <h1 >Registration Page</h1>
      <br/>
      <RegistrationForm  submit={this.submit}/>
        <p id="status"></p> <br/>
        <p>Already have an account?</p>
       
          <Link to="/log" >
          <Button className='btn1' >Login</Button>
          </Link>
     &nbsp;&nbsp;&nbsp;
          <Link to="/" >
          <Button className='btn1'  >Back to Home</Button>
          </Link>
</center>
    </div>

  );

}

}

export default SignUp;