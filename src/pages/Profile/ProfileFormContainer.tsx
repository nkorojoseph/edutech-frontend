import { Formik, Form } from 'formik'
import {useState} from 'react'
import {  Button, Col, Container } from 'react-bootstrap';
import {  profileValidationSchema } from './../../constants/constants';
import ContactInfo from './ContactInfo';
import PersonInfo from './PersonInfo';
import OtherInfo from './OtherInfo';
import { useAuth0 } from '@auth0/auth0-react';
import { profileActions } from './../../store/actions/profileActions';
import { connect } from 'react-redux';

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

const ProfileFormContainer = (props:any) => {

    const {submitForm} = props.submitForm
    
    const {user} = useAuth0()

    const initiaProfilelValues = {
        email: user?.email,
        password:'',  
        firstname:'',
        lastname:'',
        address:['',''],
        phoneNumbers:{
            phoneNumber1:'', phoneNumber2:''
        },
       birthDate: '', 
       state:'',
       country:'',
       modeOfVerification:'',
       passportUrl:'',
       accountEvidenceUrl:'',
       description:''
    }

    const [formValues, setFormValues] = useState(null)
    const [page, setPage] = useState(0)
    const formTitles =  ['Personal Info', 'Contact Info', 'Upload Files']

    const handleNext = () => {
       return setPage((currPage:any) => currPage + 1)
    }
    const handlePrev = () => {
       return setPage((currPage:any) => currPage - 1)
    }

    const onSubmit = (values:any, onSubmitProps:any) => {
        console.log()
        submitForm(values)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <PersonInfo user={user}/>
            case 1:
                return <ContactInfo/>
            case 2: 
                return <OtherInfo/>
            default:
                return <div></div>;
        }
    }

    return (
        <Container>
            <Formik 
                initialValues= {formValues || initiaProfilelValues}
                onSubmit = {onSubmit}
                validationSchema = {profileValidationSchema}
                enableReinitialize
                validateOnMount
            >

                {
                    (formik:any) => {
                       console.log(formik.handleSubmit)
                       formik.handleSubmit(onSubmit, props)
                        return(
                            <Form>      
                            <div className='header'>
                                <h3>{formTitles[page]}</h3>
                                <br />
                            </div>         
    
                            <div className='body'>
                                 <PageDisplay/>
                            </div>                   
    
                            <div className='footer'>
                            <Button
                                onClick={()=>{
                                    setPage((currPage)=>currPage - 1)
                                
                                }}
                                disabled={page == 0}
                            >Prev</Button>
                            
                            <Button
                                onClick={()=>{
                                    setPage((currPage)=>currPage + 1)
                                
                                }}
                                disabled={page == formTitles.length -1}
                                >Next</Button>
                                <Button type="submit" className='row' disabled={Object.keys(formik.errors).length > 0} >Submit</Button>
                        </div>
                           
                        </Form>
    
         
                        )
                    }
                }
       

            </Formik>
        </Container>
    )
}

const mapStateToProps = (state:any) => {
    return {
        
    }
}

const matchDispatchToProps = (dispatch:any) => {
    return {
        submitForm : (formData:any) => dispatch(profileActions(formData))
    }
}


export default connect(mapStateToProps, matchDispatchToProps)(ProfileFormContainer)