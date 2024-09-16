"use client";
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { formValues } from '../models/models'

export default function Page() {
    const today = new Date();
    
    const formik = useFormik<formValues>({
        initialValues: {
        name: '',
        empresa: '',
        email: '',
        phone: '',
        typeEvent: '',
        cantidadPersonas: 0,
        date: '',
        message: '',
        },
        validationSchema: Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        empresa: Yup.string().required('La empresa es obligatoria'),
        email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
        phone: Yup.string().required('El teléfono es obligatorio'),
        typeEvent: Yup.string().required('El tipo de evento es obligatorio'),

        cantidadPersonas: Yup.number().required('La cantidad de personas es obligatoria').positive('La cantidad de personas debe ser un número positivo') .integer('La cantidad de personas debe ser un número entero'),

        date: Yup.date().required('La fecha del evento es obligatoria').min(today, 'La fecha del evento debe ser posterior a la fecha actual'),
        messaje: Yup.string().required('El mensaje es obligatorio'),
        }),
        onSubmit: (values) => {
        console.log(values)
        },
    })





  return (
    <div className='text-black text-lg font-bold w-full  bg-white  flex flex-col items-center justify-center'>
         <img src="/images/pageProductos/nuria-panaderia-productos.jpg" alt="images cackes" className='w-full h-[750px]'  />

        <form onSubmit={formik.handleSubmit} className='flex flex-col p-10'>
            <label htmlFor="name" className='mb-2'>Nombre:</label>
            <input type="text" name="name" id="name" className='border border-spacing-0.5 font-normal rounded mb-7'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            />

            <label htmlFor="empresa"  className='mb-2'>Empresa:</label>
            <input type="text" name="empresa" id="empresa" className='border border-spacing-0.5 font-normal rounded mb-7'
            value={formik.values.empresa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            />

            <label htmlFor="email"  className='mb-2' >Email:</label>
            <input type="email" name="email" id="email"  className='border border-spacing-0.5 font-normal rounded mb-7'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />

            <label htmlFor="phone"  className='mb-2'>Teléfono:</label>
            <input type="tel" name="phone" id="phone" className='border border-spacing-0.5 font-normal rounded mb-7'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            />

            <label htmlFor="typeEvent"  className='mb-2'>Tipo de evento:</label>
            <select name="typeEvent" id="typeEvent" className='border border-spacing-0.5 font-normal rounded mb-7'
            value={formik.values.typeEvent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            >
                <option value="coffeeBreak">Coffee Break</option>
                <option value="cocktails">Cocktails</option>
                <option value="jornadas">Jornadas y Almuerzos Laborales</option>
                <option value="MesaDulce">Mesa dulce</option>
                <option value="ServicioDeTe">Servicio de Té</option>
            </select>

            <label htmlFor="cantidadPersonas"  className='mb-2'>Cantidad de personas</label>
            <input type="number" name="cantidadPersonas" id="cantidadPersonas" className='border font-normal border-spacing-0.5 rounded mb-7'
            value={formik.values.cantidadPersonas}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />

            <label htmlFor="date" className='mb-2'>Fecha del evento:</label>
            <input type="date" name="date" id="date"className='border border-spacing-0.5 font-normal rounded mb-7'
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />

            <label htmlFor="message" className='mb-2' >Mensaje:</label>
            <textarea name="message" id="message" cols={30} rows={4} className='border border-spacing-0.5 font-normal rounded mb-7'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            ></textarea>
            
            
            
            
                       <button type="submit" onClick={()=>console.log(1)}  >Enviar</button>
        </form>

    </div>
  )
}
