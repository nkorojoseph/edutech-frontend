import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import {useState} from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl';
import BootstrapInputComp from './BootstrapInputComp';

const selectOptions=[
    { key:'Select an option', value:''},
    { key:'Option 1' , value:'option 1'},
    { key:'Option 2' , value:'option 2'},
    { key:'Option 3' , value:'option 3'}
]
const radioOptions=[
    { key:'Option 1' , value:'option 1'},
    { key:'Option 2' , value:'option 2'},
    { key:'Option 3' , value:'option 3'}
]

const checkOptions=[
    { key:'C 1' , value:'C 1'},
    { key:'C 2' , value:'C 2'},
    { key:'C 3' , value:'C 3'}
]

const initialValues = {
    fullname:'',
    price:0,
    language:'',
    total_pages:0,
    location:'',
    tag:'',
    phoneNumbers: {
        phoneNumber1:'',
        phoneNumber2:''
    },
    social:['', ''],
    certificates: [''],
    description:'',
    selectCategory:'',
    radioCategory:'',
    checkboxOptions:[],
    birthDate: null, 
    email:''
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
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object({
    fullname: Yup.string().required('Required'),
    price: Yup.number().required('Required'), 
    language: Yup.string().required('Required'),
    total_pages: Yup.number().required('Required'),
    location: Yup.string().required('Required'),
    phoneNumbers: Yup.object({
        phoneNumber1: Yup.string().required('Required'),
        phoneNumber2: Yup.string().required('Required'),
    }),
    tag:Yup.string().required('Required'), 
    checkboxOptions: Yup.array().required('Choose one'),
    birthDate: Yup.date().required('Pick a date').nullable(),
    email: Yup.string().email('Provide a valid email').required('Required')
})


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
                <label htmlFor="name" className='row'>Name</label>
                <Field type="text" name="fullname" />
                <ErrorMessage name='fullname' className='row error' />

                <label htmlFor="price" className='row'>Price</label >
                <Field type="text" name={'price'} />
                <ErrorMessage name='price' className=' row error' />

                <label htmlFor="language" className='row'>Language</label>
                <Field type="text" name={'language'} />
                <ErrorMessage name='language' className=' row error' />

                <label htmlFor="total_pages" className='row'>Total Pages</label>
                <Field type="number" name={'total_pages'} />
                <ErrorMessage name='total_pages' className='row error' />

                <Field name="location">
                    {
                        (props:any)=>{
                            const {field, form, meta} = props
                            return (
                                <div>
                                    <label htmlFor='location'>Location</label>
                                    <input type="text" {...field}/>
                                    {meta.touched && meta.error ? <div>Not required </div>:'' }
                                </div>
                            )
                        }
                    }
                </Field>

                <label htmlFor="language" className='row'>PhoneNumber1</label>
                <Field type="text" name={'phoneNumbers.phoneNumber1'} />
                <ErrorMessage name='phoneNumbers.phoneNumber1' className=' row error' />
                <label htmlFor="language" className='row'>PhoneNumber2</label>
                <Field type="text" name={'phoneNumbers.phoneNumber2'} />
                <ErrorMessage name='phoneNumbers.phoneNumber2' className=' row error' />


                <label htmlFor="Social" className='row'>Social Media 1</label>
                <Field type="text" name={'social[0]'} />
                <ErrorMessage name='social[0]' className=' row error' />
                <label htmlFor="Social" className='row'>Social Media 2</label>
                <Field type="text" name={'social[1]'} />
                <ErrorMessage name='social[1]' className=' row error' />


                <label htmlFor="certificates" className='row'>Certificates</label>
               <FieldArray name='certificates'>
                    {
                        
                        (fieldArrayProps:any)=>{
                            const {push, remove, form} = fieldArrayProps
                            const {values} = form
                            const {certificates} = values
                
                            return (
                                <div>
                                    { certificates.map((certificate:any, index:any)=>(
                                            <div key={index}> 
                                                <Field name={`certificates[${index}]`} />
                                                { index>0 && 
                                                    <button type='button' onClick={()=>remove(index)}>Remove -</button>
                                                }
                                                 <button type='button' onClick={()=>push('')}>Add +</button>
                                                
                                            </div>
                                    )   ) 
                                    }
                                </div>
                            )
                        }
                    }
               </FieldArray>

               <FormikControl control='input' type='text' label='Tag' name='tag'/>
               {/* <button type="button" className='row' onClick={()=>setFormValues(savedlValues)}>Load Saved Data</button> */}
               
               <FormikControl control='textarea' label='Description' name='description' />

               <FormikControl control= 'select' label='Select a category' name='selectCategory' options={selectOptions} />
               
               <FormikControl control='radio' label='Use radio for category' name='radioCategory' options={radioOptions} />
               <FormikControl control='checkbox' label='Use Checkbox for category' name='checkboxOptions' options={checkOptions} />
               <FormikControl control='date' label='Birth date' name='birthDate' />

               
              <BootstrapInputComp control='bootstrapInput' name='email' label='Email' />
                <button type="submit" className='row'>Submit</button>
            </Form>
            
        </Formik>
    )
}

export default ProfileForms
