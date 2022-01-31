
import Form from 'react-bootstrap/Form'
import { Field } from 'formik';
import { FormControl } from 'react-bootstrap';


const BootstrapInputComp = (props:any) => {
    const {label, name, ...rest} = props

  return (
      <Field name={name}>
          {
              ({field, form}:any) =>{
                  {console.log(form.values)}
                  return (
                    <Form.Group className="mb-3" >
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

export default BootstrapInputComp;
