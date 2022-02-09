import { SUBMIT_FORM } from "../../constants/constants"

// const initialValues = {
//     password:'',  
//     firstname:'',
//     lastname:'',
//     address:['',''],
//     phoneNumbers:{
//         phoneNumber1:'', phoneNumber2:''
//     },
//     birthDate: '', 
//     state:'',
//     country:'',
//     modeOfVerification:'',
//     passportUrl:'',
//     accountEvidenceUrl:'',
//     description:''
// }
 
export const profileReducer = (state={}, action:any) => {
   
    switch (action.type) {
        case SUBMIT_FORM:
            console.log(action)
            console.log("from form submission")
            return {
                ...state,
                profile: action.payload
            }
    
        default:
            return state;
    }
}