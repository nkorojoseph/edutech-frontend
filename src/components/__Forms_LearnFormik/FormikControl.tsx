import React from 'react'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'
import TextAreaComponent from './TextAreaComponent'
import RadioComponent from './RadioComponent';
import CheckBoxComponent from './CheckBoxComponent';
import DatePickerComponent from './DatePickerComponent';


const FormikControl = (props:any) => {
    const {control, ...rest} = props

    switch(control) {
        case 'input':
            return <InputComponent {...rest} />
        case 'textarea':
            return <TextAreaComponent {...rest} />
        case 'select':
            return <SelectComponent {...rest} />
        case 'radio':
            return <RadioComponent {...rest} />
        case 'checkbox':
            return <CheckBoxComponent {...rest} />
        case 'date':
            return <DatePickerComponent {...rest} />

        default: return null
    }
}

export default FormikControl 