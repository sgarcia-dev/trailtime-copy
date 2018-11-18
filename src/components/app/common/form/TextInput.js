import React from 'react';
//import { Field, reduxForm } from 'redux-form';

const TextInput = ({ input, width, type, placeholder, meta: { touched, error } }) => {
    return (
        <div>
            <input {...input} placeholder={placeholder} type={type} />

            {/*<Field error={touched && !!error} width={width}>
                <input {...input} placeholder={placeholder} type={type} />
                {touched && error && <label>{error}</label>}
    </Field>*/}
        </div>
    )
}

export default TextInput;

/* 
import React, { Component } from 'react'

class TextInput extends Component {
  render() {
    const { input: { value, onChange } } = this.props
    return (
      <div>
        <span>The current value is {value}.</span>
        
        <button type="button" onClick={() => onChange(value + 1)}>Inc</button>
        <button type="button" onClick={() => onChange(value - 1)}>Dec</button>
      </div>
    )
  }
}
*/