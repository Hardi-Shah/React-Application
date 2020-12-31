import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const dropdownOptions = [
        {
            key: 'Select an option', value: ''
        },
        {
            key: 'option1', value: 'option1'
        },
        {
            key: 'option2', value: 'option2'
        },
        {
            key: 'option3', value: 'option3'
        }
    ]
    const radioOptions = [
        {
            key: 'option1', value: 'roption1'
        },
        {
            key: 'option2', value: 'roption2'
        },
        {
            key: 'option3', value: 'roption3'
        }
    ]
    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birtdate: null
    }
    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Reuired'),
        description: Yup.string().required('Reuired'),
        selectOption: Yup.string().required('Reuired'),
        radioOption: Yup.string().required('Reuired'),
        checkboxOption: Yup.array().required('Required'),
        birtdate: Yup.date().required('Required').nullable()
    })
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {
                formik => (
                    <Form>
                        <FormikControl control='input' label='Email' name='email' type='email' />
                        <FormikControl control='textarea' label='Description' name='description' />
                        <FormikControl control='select' label='Select a Topic' name='selectOption' options={dropdownOptions} />
                        <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions} />
                        <FormikControl
                            control='checkbox'
                            label='Checkbox topics'
                            name='checkboxOption'
                            options={checkboxOptions}
                        />
                        <FormikControl
                            control='date'
                            label='Pick a date'
                            name='birthDate'
                        />
                        <button type='submit'>submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
export default FormikContainer