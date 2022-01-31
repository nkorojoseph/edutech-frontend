import { Field } from 'formik';
import React, { Fragment } from 'react';

const RadioComponent = (props:any) => {
    const {label, name, options, ...rest} = props
  return (
            <div className='form-control'>
                <label htmlFor={name}>{label}</label>
                <Field name={name} {...rest}>
                {
                        ({field}:any)=>{
                            return options.map((option:any)=>{
                                return (
                                    <Fragment key={option.key}>
                                        <input type='radio' id={option.value} {...field} value={option.value} checked={field.value ===option.value} />
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </Fragment>
                                )
                                
                            })
                        }
                    }
                
                </Field>
            </div>
        );
};

export default RadioComponent;
