import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Inicio } from './inicio'
import { ProductosLista } from './products'
import { ProductoDetalles } from './products/ProductoDetalles'

export const Paginas = () => {

  return (
    <section>
      <Routes>
        <Route path="/" element={ <Inicio/> } />
        <Route path="/productos" element={ <ProductosLista/> } />
        <Route path="/producto/:id" element={ <ProductoDetalles/> } />
      </Routes>
    </section>
  )
}
