import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Countries, ModeOfVerification, States } from '../../constants/constants';
import FormikControl from '../../components/FormComponents/FormikControl';

const PersonInfo = (props:any) => {
    const {email} = props.user

  return (
          <>
          
              <Row className='mb-3 align-items-center'>
                  <FormikControl control='input' type='email' label='Email' name='email' disabled />
                  <FormikControl control='input' type='password' label='Password' name='password' />
              </Row>

              <Row className='mb-3 align-items-center'>
                  <FormikControl control='input' type='text' label='Firstname' name='firstname'/>
                  <FormikControl control='input' type='text' label='Lastname' name='lastname'/>
              </Row>
              
              <Row className='mb-3 align-items-center'>
                  <FormikControl control='input' type='text' label='Phonenumber 1' name={'phoneNumbers.phoneNumber1'}/>
                  <FormikControl control='input' type='text' label='Phonenumber 2' name={'phoneNumbers.phoneNumber2'}/>
              </Row>
          </>
                       

  )
};

export default PersonInfo;
