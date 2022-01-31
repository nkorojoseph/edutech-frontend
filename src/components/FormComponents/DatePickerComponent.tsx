import { ErrorMessage, Field } from 'formik';
import React, { Fragment } from 'react';
import { Form, Col } from 'react-bootstrap';
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



const DatePickerComponent = (props:any) => {
    const {label, name, ...rest} = props
  return (
    <Form.Group as={Col}  >
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Field name={name}>
            {
                ({form,field}:any) => {
                    const {setFieldValue} = form
                    const {value} = field

                    return(
                        <Fragment>
                                 <DateView 
                                    id={name}
                                    {...field}
                                    {...rest}
                                    selected={value}
                                    onChange={(val:any)=>setFieldValue(name,val)}
                                    className='form-control'
                                    isInvalid={form.errors[name] && form.touched[name]}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {form.errors[name]}
                                </Form.Control.Feedback>
                        </Fragment>
                       
                    )
                }
            }
        </Field>
       
    </Form.Group>
  )
};

export default DatePickerComponent;
