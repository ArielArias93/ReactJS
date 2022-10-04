import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';


const RegisterFormik = () => {

    let user = new User();

    const initialValues = {

        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
        }

    const registerSchema = Yup.object().shape(
        {

            username: Yup.string()
                .min(6, 'Nombre de usuario muy corto')
                .max(12, 'Nombre de usuario muy largo')
                .required('Nombre de usuario es obligatorio'),

            email: Yup.string()
                .email('Error: Email invalido')
                .required('Email es obligatorio'),

            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'Debes seleccionar un Role: User/Admin')
                .required('Este campo es obligatorio'),

            password: Yup.string()
                .min(8, 'La contraseña es muy corta')
                .required('Contraseña es obligatoria'),

            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(

                        [Yup.ref("password")],
                        'password must match'
                    )
                }).required('Confirma tu contraseña')
        }
    )

    const submit = (values) => {

        alert('Registrar usuario');
    }

    return (

        <div>
            
            <h4>Registro Formik</h4>

            <Formik
            
            initialValues = {initialValues}

            validationSchema = {registerSchema}

            onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 1000));
                        alert(JSON.stringify(values, null, 2));
                    }}
            >

                {({ values,
                        touched,
                        errors,
                        issubmitting,
                        handleChange,
                        handleBlur}) => (

                            <Form>

                                <label htmlFor="username">Nombre de usuario</label>
                                    <Field id="username" name="username" placeholder="Ingrese nombre de usuario" type='username'/>

                                    {
                                    errors.username && touched.username && (

                                        <ErrorMessage name="username" component='div'/>
                                    )
                                }

                                <label htmlFor="email">Email</label>
                                    <Field id="email" type="email" name="email" placeholder="Ingrese Email" />

                                    {
                                    errors.email && touched.email && (

                                        <ErrorMessage name="email" component='div'/>
                                    )
                                }

                                <label htmlFor="password">Ingrese contraseña</label>
                                    <Field id="password" name="password" placeholder="Ingrese contraseña" type='password'/>

                                {
                                    errors.password && touched.password && (

                                        <ErrorMessage name="password" component='div'/>
                                    )
                                }   

                                <label htmlFor="confirm">Confirmar contraseña</label>
                                    <Field id="confirm" name="confirm" placeholder="Ingrese contraseña" type='password'/>

                                {
                                    errors.confirm && touched.confirm && (

                                        <ErrorMessage name="confirm" component='div'/>
                                    )
                                }                      

                                <button type="submit">Registrar cuenta</button>
                                {issubmitting ? (<p>Enviando tus credenciales...</p>): null}

                            </Form>
                        )
                }
                
            </Formik>
        </div>
    );
}

export default RegisterFormik;
