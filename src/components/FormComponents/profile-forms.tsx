import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import {useState} from 'react'
import { Row, Button, Col } from 'react-bootstrap';
import * as Yup from 'yup'
import FormikControl from './FormikControl';


const selectOptions=[
    { key:'Select an option', value:''},
    { key:'Option 1' , value:'option 1'},
    { key:'Option 2' , value:'option 2'},
    { key:'Option 3' , value:'option 3'}
]
const radioOptions=[
    { key:'LinkedIn' , value:'option 1'},
    { key:'FaceBook' , value:'option 2'},
    { key:'Twitter' , value:'option 3'}
]

const checkOptions=[
    { key:'C 1' , value:'C 1'},
    { key:'C 2' , value:'C 2'},
    { key:'C 3' , value:'C 3'}
]

const initialValues = {
    tag:'',
    description:'',
    selectCategory:'',
    heardOfUs:'',
    checkboxOptions:[],
    birthDate: '', 
}

const savedlValues = {
    fullname:'Joseph Nkoro',
    price:50000,
    language:'ENG',
    total_pages:50,
    location:'LG',
    phoneNumbers: {
        phoneNumber1:'07038472288',
        phoneNumber2:'08034744698'
    },
    social:['FB', 'TW'],
    certificates: ['BSc']
}

const onSubmit = (values:any, onSubmitProps:any) => {
    console.log(values)
    alert(JSON.stringify(values))
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object({  
    tag:Yup.string().required('Required'), 
    description: Yup.string().required('Enter a note'),
    selectCategory: Yup.string().required('Select an option'),
    checkboxOptions: Yup.array(),
    heardOfUs: Yup.string().required('Required'),
    birthDate: Yup.date().required('Pick a date'),
})
    // fullname: Yup.string().required('Required'),
    // price: Yup.number().required('Required'), 
    // language: Yup.string().required('Required'),
    // total_pages: Yup.number().required('Required'),
    // location: Yup.string().required('Required'),
    // phoneNumbers: Yup.object({
    //     phoneNumber1: Yup.string().required('Required'),
    //     phoneNumber2: Yup.string().required('Required'),
    // }),
    // checkboxOptions: Yup.array().required('Choose one'),
    // birthDate: Yup.date().required('Pick a date').nullable(),
    // email: Yup.string().email('Provide a valid email').required('Required')

const ProfileForms = ():any => {

    const [formValues, setFormValues] = useState(null)
    
    return (
        <Formik 
            initialValues= {formValues || initialValues}
            onSubmit =  {onSubmit}
            validationSchema = {validationSchema}
            enableReinitialize
        >
            <Form>
               
               <Row className='mb-3'>
                    <FormikControl control='input' type='text' label='Tag' name='tag'/>

                    <FormikControl control='date' label='Birth date' name='birthDate' />
               </Row>
                         
               <Row className='mb-3'>

                   <Col sm={6}>
                        <FormikControl control= 'select' label='Select a category' name='selectCategory' options={selectOptions} />
                   </Col>

                   <Col sm={6}>

                        <FormikControl control='textarea' label='Description' name='description' />

                   </Col>

               </Row>

               <Row className='mb-3'>
               <Col sm="6" className="my-1">
               <FormikControl control='radio' label='Use radio for category' name='heardOfUs' options={radioOptions} />

                </Col>
               <Col sm="6" className="my-1">
               <FormikControl control= 'checkbox' label='Thick your option(s)' name='checkboxOptions' options={checkOptions} />

                </Col>
                </Row>

                
                
             
               
                
               
                <Button type="submit" className='row'>Submit</Button>
               
            </Form>

            
            
        </Formik>
    )
}

export default ProfileForms
