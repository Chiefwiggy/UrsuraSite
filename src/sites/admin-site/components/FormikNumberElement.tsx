import React from 'react'
import { TextField } from '@mui/material';

import '../styles/CreateSpellForm.scss'

const FormikNumberElement = ({
    field,
    label,
    formik
}) => {
    return <TextField 
    id={field}
    name={field}
    label={label}
    className="f-FormikElement f-NumberElement"
    type="number"
    autoComplete='off'
    value={formik.values[field]}
    onChange={formik.handleChange}
/>
}

export default FormikNumberElement