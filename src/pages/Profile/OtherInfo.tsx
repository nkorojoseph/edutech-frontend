import { Field } from 'formik';
import React from 'react';
import { Row } from 'react-bootstrap';
import InputComponent from './../../components/__Forms_LearnFormik/InputComponent';
import  Form  from 'react-bootstrap/Form';

const OtherInfo = (props:any) => {

  
  return (<>
        <Row className='mb-3 align-items-center'>
          <Field name={'passportUrl'}>
            {
              ({field, form}:any)=>{
                return (
                  <Form.Group controlId="formFileMultiple" >
                  <Form.Label>Upload your international passport</Form.Label>
                  <Form.Control type="file"  />
                </Form.Group>
                )
               
              }
            }
          </Field>

          <Field name={"accountEvidenceUrl"}>
            {
              ({field, form}:any)=>{
                return (
                  <Form.Group controlId="formFileMultiple" >
                  <Form.Label>Upload account evidence</Form.Label>
                  <Form.Control type="file"  />
                </Form.Group>
                )
               
              }
            }
          </Field>
        </Row>
  </>)
};

export default OtherInfo;
