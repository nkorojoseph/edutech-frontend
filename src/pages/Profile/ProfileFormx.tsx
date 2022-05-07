import { Formik, Form, Field } from 'formik'
import {useState} from 'react'
import {  Button, Col, Container } from 'react-bootstrap';
import {  profileValidationSchema } from '../../constants/constants';
import ContactInfo from './ContactInfo';
import PersonInfo from './PersonInfo';
import OtherInfo from './OtherInfo';
import { useAuth0 } from '@auth0/auth0-react';
import { profileActions } from '../../store/actions/profileActions';
import { connect } from 'react-redux';

// //fetch from the db
// const savedlValues = {
//     email:'',
//     password:'',  
//     firstname:'',
//     lastname:'',
//     address:['',''],
//     phoneNumbers:{
//         phoneNumber1:'', phoneNumber2:''
//     },
//    birthDate: '', 
//    state:'', county:'',
//    modeOfVerification:'',
//    documentURL:''
// }

// const ProfileFormX = (props:any) => {

    
    
//     const {user} = useAuth0()

//     const initiaProfilelValues = {
//         email: user?.email,
//         password:'',  
//         firstname:'',
//         lastname:'',
//         address:['',''],
//         phoneNumbers:{
//             phoneNumber1:'', phoneNumber2:''
//         },
//        birthDate: '', 
//        state:'',
//        country:'',
//        modeOfVerification:'',
//        passportUrl:'',
//        accountEvidenceUrl:'',
//        description:''
//     }

//     const [formValues, setFormValues] = useState(null)
//     const [page, setPage] = useState(0)
//     const formTitles =  ['Personal Info', 'Contact Info', 'Upload Files']

//     const handleNext = () => {
//        return setPage((currPage:any) => currPage + 1)
//     }
//     const handlePrev = () => {
//        return setPage((currPage:any) => currPage - 1)
//     }

//     const onSubmit = (values:any, onSubmitProps:any) => {
//         console.log()
        
//         onSubmitProps.setSubmitting(false)
//         onSubmitProps.resetForm()
//     }

//     const PageDisplay = () => {
//         switch (page) {
//             case 0:
//                 return <PersonInfo user={user}/>
//             case 1:
//                 return <ContactInfo/>
//             case 2: 
//                 return <OtherInfo/>
//             default:
//                 return <div></div>;
//         }
//     }

//     return (
//         <Container>
//             <Formik 
//                 initialValues= {formValues || initiaProfilelValues}
//                 onSubmit = {onSubmit}
//                 validationSchema = {profileValidationSchema}
//                 enableReinitialize
//                 validateOnMount
//             >

//                 {
//                     (formik:any) => {
                     
//                         return(
//                             <Form>      
//                             <div className='header'>
//                                 <h3>{formTitles[page]}</h3>
//                                 <br />
//                             </div>         
    
//                             <div className='body'>
//                                  <PageDisplay/>
//                             </div>                   
    
//                             <div className='footer'>
//                             <Button
//                                 onClick={()=>{
//                                     setPage((currPage)=>currPage - 1)
                                
//                                 }}
//                                 disabled={page == 0}
//                             >Prev</Button>
                            
//                             <Button
//                                 onClick={()=>{
//                                     setPage((currPage)=>currPage + 1)
                                
//                                 }}
//                                 disabled={page == formTitles.length -1}
//                                 >Next</Button>
//                                 <Button type="submit" className='row' disabled={Object.keys(formik.errors).length > 0} >Submit</Button>
//                         </div>
                           
//                         </Form>
    
         
//                         )
//                     }
//                 }
       

//             </Formik>
//         </Container>
//     )
// }

// const mapStateToProps = (state:any) => {
//     return {
        
//     }
// }

// const matchDispatchToProps = (dispatch:any) => {
//     return {
//         submitForm : (formData:any) => dispatch(profileActions(formData))
//     }
// }


// export default connect(mapStateToProps, matchDispatchToProps)(ProfileFormX)



import React from 'react';
import * as Yup from 'yup';
import { withFormik, ErrorMessage } from 'formik';
//import { Debug } from 'debug';

const formikEnhancer = withFormik({
  mapPropsToValues:( props:any) =>{
      if (!props.user.email == undefined) {
        return ({ email: props.user.email })
      }
      return {}
     
  } ,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'MyForm', // helps with React DevTools
});

const MyForm = (props :any)=> {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <Form>
      <label htmlFor="email">Email</label>
      <Field name="email" placeholder="jane@acme.com" type="email" />
      <div>
        <ErrorMessage name="email" />
      </div>
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      {/* <Debug /> */}
    </Form>
  );
};

export default formikEnhancer(MyForm);