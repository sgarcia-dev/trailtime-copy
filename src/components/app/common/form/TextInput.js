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