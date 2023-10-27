import { TextField } from '@mui/material';
import React from 'react';

import '../styles/CreateSpellForm.scss'

const FormikTextElement = ({
    field,
    label,
    formik,
    ...otherDetails
}) => {
    return (
<TextField 
        id={field}
        name={field}
        label={label}
        type="text"
        className="f-FormikElement"
        autoComplete='off'
        value={formik.values[field]}
        onChange={formik.handleChange}
        {...otherDetails}
    />
    ) 
}

export default FormikTextElement;