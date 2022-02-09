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
                            <FormikControl control='input' type='email' label='Email' name='email' disabled/>
                            <FormikControl control='input' type='password' label='Password' name='password' disabled/>
                        </Row>

                        <Row className='mb-3 align-items-center'>
                            <FormikControl control='input' type='text' label='Firstname' name='firstname'/>
                            <FormikControl control='input' type='text' label='Lastname' name='lastname'/>
                        </Row>

                        
                        <Row className='mb-3 align-items-center'>
                            <FormikControl control='input' type='text' label='Phonenumber 1' name={'phoneNumbers.phoneNumber1'}/>
                            <FormikControl control='input' type='text' label='Phonenumber 2' name={'phoneNumbers.phoneNumber2'}/>
                        </Row>

                       


                        
                        <Button type="submit" className='row'>Submit</Button>
                        
                    </Form>

            

            </Formik>
        </Container>
    )
}

export default ProfileForm
