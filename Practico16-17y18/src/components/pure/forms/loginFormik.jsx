import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Error: Email invalido').required('Este campo es obligatorio'),
        password: Yup.string().required('Este campo es obligatorio')
    }
)


const LoginFormik = () => {

    const initialCredentials = {

        email: '',
        password: ''
    }

    const history = useHistory()

    return (

        <div>
            <h4>login Form</h4>
                <Formik

                    initialValues={initialCredentials}
                    validationSchema = {loginSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 1000));
                        alert(JSON.stringify(values, null, 2));
                        await localStorage.setItem('credential', values)
                        history.push('/profile')
                    }}
                >

                    {({ values,
                        touched,
                        errors,
                        issubmitting,
                        handleChange,
                        handleBlur}) => (

                            <Form>

                                <label htmlFor="firstName">Email</label>
                                <Field id="email" type="email" name="email" placeholder="Ingrese Email" />

                                {
                                    errors.email && touched.email && (

                                        <ErrorMessage name="email" component='div'/>
                                    )
                                }

                                <label htmlFor="password">Contraseña</label>
                                <Field id="password" name="password" placeholder="Ingrese contraseña" type='password'/>

                                {
                                    errors.password && touched.password && (

                                        <ErrorMessage name="password" component='div'/>
                                    )
                                }

                                <button type="submit">Entrar</button>

                                {issubmitting ? (<p>Ingresando tus datos...</p>) : null}

                        </Form>
                    )}

                </Formik>
        </div>
    );
}

export default LoginFormik;
