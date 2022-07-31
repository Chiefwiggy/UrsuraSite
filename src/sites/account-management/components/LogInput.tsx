import React from 'react'
import {FormikContextType} from 'formik'

interface LogInputInput {
    name: string,
    id: string,
    formik: FormikContextType<any>,
    password?: boolean
}

const LogInput = ({
    name,
    id,
    formik,
    password
}: LogInputInput) => {

    return (
        <div className="LogInput">
            <p className="LogTitle">{name}</p>
            {
                formik?.errors[id] 
                    ?
                        <small className="ErrorText">{formik?.errors[id]?.toString()}</small>
                    : 
                        <small className="Buffer">_</small>
            }
            
            <input
                className="LogInputTextBox"
                type={password ? "password" : "text"}
                placeholder={name}
                value={formik?.values[id]}
                id={id}
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                
            />
        </div>
    )
}

export default LogInput;