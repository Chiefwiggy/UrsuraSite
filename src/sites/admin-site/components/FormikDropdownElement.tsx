import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import React from 'react';

import '../styles/CreateSpellForm.scss'

interface FormikDropdownValue {
    value: any,
    label: string
}

interface FormikDropdownElementInput {
    field: string,
    label: string,
    values: Array<FormikDropdownValue>
    formik: FormikProps<any>
    style?: Object
}

const FormikDropdownElement = ({
    field,
    label,
    values,
    formik
}: FormikDropdownElementInput) => {
    return (
        <FormControl>
             <InputLabel id={"f-"+label} className="f-FormikDropdownLabel">{label}</InputLabel>
            <Select
                id={field}
                labelId={"f-"+label}
                name={field}
                value={formik.values[field]}
                className="f-FormikElement"
                onChange={formik.handleChange}
                label={label}
                
            >
                {
                    values.map((option: FormikDropdownValue) => {
                        return <MenuItem key={option.value+option.label} value={option.value}>{option.label}</MenuItem>
                    })
                }

            </Select>
        </FormControl>
    ) 
}

export default FormikDropdownElement;