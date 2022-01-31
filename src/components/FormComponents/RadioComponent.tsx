import { Field } from 'formik';
import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


const RadioComponent = (props:any) => {
    const {label, name, options, ...rest} = props
  return (
        <div>
            {label}
        
        <Form.Group as={Col} >   
                
                <Field name={name} {...rest}>
                {
                        ({field,form}:any)=>{
                            <Form.Control.Feedback type="invalid">
                            {form.errors[name]}
                        </Form.Control.Feedback>
                            return options.map((option:any)=>{
                                return (
                                    <Fragment key={option.key}>
                                        
                                         <Form.Check
                                               
                                                name={name}
                                                type='radio'
                                                label={option.key}
                                                id={`inline-${option.value}-1`}
                                                {...field}
                                                value={option.value}
                                                checked={field.value ===option.value}
                                                isInvalid={form.errors[name] && form.touched[name]}
                                            />
                                         
                                       
                                    </Fragment>
                                )
                                
                            })
               
                        }
                    }
                
                </Field>
                
            </Form.Group>
            </div>
         
        );
};

export default RadioComponent;
