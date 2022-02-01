import * as Yup from 'yup'

export const Countries=[
    { key:'Select a country', value:''},
    { key:'Nigeria' , value:'NGN'},
    { key:'United State of America' , value:'USA'},
    { key:'England' , value:'Uk'}
]

export const Medias=[
    { key:'LinkedIn' , value:'LKN'},
    { key:'FaceBook' , value:'FB'},
    { key:'Twitter' , value:'TW'}
]

export const ModeOfVerification=[
    { key:'Passport' , value:'PSS'},
    { key:'Nation ID' , value:'NID'},
    { key:'National Identification Number' , value:'NIN'}
]

export const States=[
    { key:'Abia' , value:'ABA'},
    { key:'Lagos' , value:'LAG'},
    { key:'Kano' , value:'KN'}
]

export const profileValidationSchema = Yup.object({  
    email: Yup.string().email('Supply valid email').required('Can not be empty'),
    password: Yup.string().required('Enter valid password')
    .min(8,'Password must be more than 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain only alphabets'),  
    firstname: Yup.string().required('Required firstname'),
    lastname:Yup.string().required('Required lastname'),
    address:Yup.array().required('Enter at least 1 address line'),
    phoneNumbers: Yup.object({
        phoneNumber1: Yup.string().required('Required'),
    }).required('Can\'t be empty/'),
 
})
