import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Formulario = () => {

    const initialValues = {

        tarea: '',
        descripcion: ''
    }

    const registroSchema = Yup.object().shape(
        {

            tarea: Yup.string()
                .min(4, 'Nombre de tarea muy corto')
                .max(12, 'Nombre de tarea muy largo')
                .required('Nombre de tarea es obligatorio'),

            descripcion: Yup.string()
                .min(10, 'Descripcion muy corta')
                .max(100, 'Descripcion muy larga')
                .required('Descripcion es obligatorio'),
        }
    )


    return (
        
        <div>

            <h2>Registro de tareas</h2>

            <Formik

                initialValues = {initialValues}
                
                validationSchema = {registroSchema}

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

                                <label htmlFor="tarea">Nombre de la tarea</label>
                                        <Field id="tarea" name="tarea" placeholder="Ingrese nombre de la tarea" type='tarea'/>

                                        {
                                        errors.tarea && touched.tarea && (

                                            <ErrorMessage name="tarea" component='div'/>
                                        )
                                    }

                                <label htmlFor="descripcion">Descripcion</label>
                                    <Field id="descripcion" name="descripcion" placeholder="Ingrese la descripcion" type='descripcion'/>

                                    {
                                    errors.descripcion && touched.descripcion && (

                                        <ErrorMessage name="descripcion" component='div'/>
                                    )
                                }

                                <button type="submit">Registrar</button>
                                {issubmitting ? (<p>Registrando la tarea...</p>): null}



                            </Form>
                        )
                }

            </Formik>            
        </div>
    );
}

export default Formulario;
