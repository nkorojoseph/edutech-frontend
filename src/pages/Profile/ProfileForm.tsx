import { Formik, Form, Field, FieldArray } from 'formik'
import {useState} from 'react'
import { Row, Button, Col, Container } from 'react-bootstrap';
import { Countries, States, Medias, profileValidationSchema, ModeOfVerification } from './../../constants/constants';
import FormikControl from './../../components/FormComponents/FormikControl';


const initialValues = {
    email:'',
    password:'',  
    firstname:'',
    lastname:'',
    address:['',''],
    phoneNumbers:{
        phoneNumber1:'', phoneNumber2:''
    },
   birthDate: '', 
   state:'', county:'',
   modeOfVerification:'',
   documentURL:'',
   description:''
}

//fetch from the db
const savedlValues = {
    email:'',
    password:'',  
    firstname:'',
    lastname:'',
    address:['',''],
    phoneNumbers:{
        phoneNumber1:'', phoneNumber2:''
    },
   birthDate: '', 
   state:'', county:'',
   modeOfVerification:'',
   documentURL:''
}

const onSubmit = (values:any, onSubmitProps:any) => {
    console.log(values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}



const ProfileForm = ():any => {

    const [formValues, setFormValues] = useState(null)
    
    return (
        <Container>
            <Formik 
                initialValues= {formValues || initialValues}
                onSubmit =  {onSubmit}
                validationSchema = {profileValidationSchema}
                enableReinitialize
            >

                    <Form>                                  
                        <Row className='mb-3 align-items-center'>
                            <FormikControl control='input' type='email' label='Email' name='email'/>
                            <FormikControl control='input' type='password' label='Password' name='password'/>
                        </Row>

                        <Row className='mb-3 align-items-center'>
                            <FormikControl control='input' type='text' label='Firstname' name='firstname'/>
                            <FormikControl control='input' type='text' label='Lastname' name='lastname'/>
                        </Row>

                        <Row className='mb-3 align-items-center'>
                            <FormikControl control='input' type='text' label='Addressline 1' name={'address[0]'}/>
                            <FormikControl control='input' type='text' label='Addressline 2' name={'address[1]'}/>
                        </Row>
                        <Row className='mb-3 align-items-center'>
                            <FormikControl control='input' type='text' label='Phonenumber 1' name={'phoneNumbers.phoneNumber1'}/>
                            <FormikControl control='input' type='text' label='Phonenumber 2' name={'phoneNumbers.phoneNumber2'}/>
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


                        
                        <Button type="submit" className='row'>Submit</Button>
                        
                    </Form>

            

            </Formik>
        </Container>
    )
}

export default ProfileForm
