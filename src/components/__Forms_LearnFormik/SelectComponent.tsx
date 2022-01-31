import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const SelectComponent = (props:any) => {
    const {name, label, options, ...rest} = props
    
  return (
      <div className='form-control'>
          <label htmlFor={label}>{label}</label>

          <Field as='select' id={name} name={name} {...rest}>
              {
                  options.map((option:any)=>{
                      return (
                          <option value={option.value} className="options" key={option.value}>
                              {option.key}
                          </option>
                      )
                  })
              }
          </Field>

          <ErrorMessage name={name} component={TextError} />
      </div>
  )
};

export default SelectComponent;
