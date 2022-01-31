import { Field } from 'formik';
import Form from 'react-bootstrap/Form'
import { Col, FormControl } from 'react-bootstrap';


const InputComponent = (props:any) => {
    const {label, name, ...rest} = props

  return (
      <Field name={name}>
          {
              ({field, form}:any) =>{
                  return (
                    <Form.Group  as={Col} >
                        <Form.Label htmlFor={name}>{label}</Form.Label>
                        <FormControl isInvalid={form.errors[name] && form.touched[name]} id={name} {...rest} {...field} />
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

export default InputComponent;
