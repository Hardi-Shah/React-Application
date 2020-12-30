import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
    const initialValues = {
        email:''
    }
    const onSubmit = values => {
        console.log('Form data', values)
    }

    const validationSchema = Yup.object({
        email:Yup.string().required('Reuired')
    })
    return (
        <Formik initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}>
            {
                formik => {
                    <Form>
                        <FormikControl control='input' label='Email' name='email' type='email'/>
                        <submit type='submit'>submit</submit>
                    </Form>
                }
            }
        </Formik>
    )
}
export default FormikContainer