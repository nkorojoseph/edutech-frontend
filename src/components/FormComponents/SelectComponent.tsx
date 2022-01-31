import { Field } from 'formik';
import Form from 'react-bootstrap/Form'
import {Col, FormControl } from 'react-bootstrap';

const SelectComponent = (props:any) => {
    const {name, label, options, ...rest} = props
    
  return (
            <Field name={name} {...rest} >
                {
                    ({field,form}:any) => {
                        return (
                            <Form.Group as={Col} >        
                                <Form.Label htmlFor={name} >{label}</Form.Label>
                                <Form.Select as='select' id={name} name={name} isInvalid={form.errors[name] && form.touched[name]} {...rest} {...field}>
                                    {
                                        options.map((option:any)=>{
                                            return (
                                                <option value={option.value} className="options" key={option.value}>
                                                    {option.key}
                                                </option>
                                            )
                                        })
                                    }
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {form.errors[name]}
                                </Form.Control.Feedback>
                            </Form.Group>
                        )
                    }

                }


            </Field>

  )
};

export default SelectComponent;
