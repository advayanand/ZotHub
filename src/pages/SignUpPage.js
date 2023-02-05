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
import '../styles/LoginPage.css';

const SignUpComponent = (props) => {
    return (
      <MDBContainer fluid className="login-page-form">
      
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
              <MDBCol col='12'>
      
                <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                  <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
      
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5">Please set your username and password!</p>
  
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg" onChange={e => props.setUsername(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={e => props.setEmail(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={e => props.setPassword(e.target.value)}/>
      
                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                      Sign Up
                    </MDBBtn>
      
                  </MDBCardBody>
                </MDBCard>
      
              </MDBCol>
            </MDBRow>
      
          </MDBContainer>
    )
  }


const SignUpPage = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ username, setUsername ] = useState('');
    return (
        <div className="app-login-page" >
          <SignUpComponent setEmail={setEmail} setPassword={setPassword} setUsername={setUsername} />
        </div>
    )
}

export default SignUpPage;