import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Countries, ModeOfVerification, States } from '../../constants/constants';
import FormikControl from '../../components/FormComponents/FormikControl';


const ContactInfo = () => {
  return (

    <div>
       
            <Row className='mb-3 align-items-center'>
                
                    <FormikControl control='input' type='text' label='Addressline 1' name={'address[0]'}/>
                    <FormikControl control='input' type='text' label='Addressline 2' name={'address[1]'}/>
                </Row>


                <Row className='mb-3'>
                    <FormikControl control='select' name="state" options={States} label="States" />
                    <FormikControl control='select' name="country" options={Countries} label="Country" />
                </Row>

                <Row className='mb-3'>
                    <FormikControl control='textarea' name="description" label="Description" />
                </Row>

                <Row className='mb-3'>
                    <Col sm={6} >
                        <FormikControl control='date' name="birthDate"  label="Date of birth" />
                    </Col>
                    <Col sm={6} >
                        <FormikControl control='radio' name="modeOfVerification" options={ModeOfVerification} label="Method of verification" />
                    </Col>
            </Row>

    </div>
    
  )
};

export default ContactInfo;
