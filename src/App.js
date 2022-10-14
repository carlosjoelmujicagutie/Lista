import React from 'react'
import {Contador} from './components/contador/Contador'
import { ListaUsuarios } from './components/ListaUsuarios/ListaUsuarios'

export const App = () => {
  return (
    <>
      <Contador numero={10}/>
      <ListaUsuarios/>
    </>
  )
}

