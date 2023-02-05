import React, { useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import './LoginPage.css';
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from '../controllers/authController';

const SignUpComponent = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ username, setUsername ] = useState('');

    const navigate = useNavigate();

    const signUp = async () => {
        const res = await signUpUser(username, email, password);
        const loginToken = res.data;
        console.log(loginToken);
        if ("token" in loginToken) {
            console.log(loginToken.token);
            props.setToken(loginToken.token);
            console.log("Navigating back");
            navigate('/home');
        } else {
            setUsername('');
            setPassword('');
        }
    }

    return (
      <MDBContainer fluid className="login-page-form">
      
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
              <MDBCol col='12'>
      
                <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                  <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
      
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5">Please set your username and password!</p>
  
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg" onChange={e => setUsername(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={e => setEmail(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={e => setPassword(e.target.value)}/>
      
                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={signUp}>
                      Sign Up
                    </MDBBtn>

                    <div>
                        <p className="mb-0">Already have an account? <Link to="/login" className="text-white-50 fw-bold">Log In</Link></p>
                    </div>
      
                  </MDBCardBody>
                </MDBCard>
      
              </MDBCol>
            </MDBRow>
      
          </MDBContainer>
    )
  }


const SignUpPage = (props) => {

    return (
        <div className="app-login-page" >
          <SignUpComponent setToken={props.setToken}/>
        </div>
    )
}

export default SignUpPage;