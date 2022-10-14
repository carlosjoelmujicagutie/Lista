import React from 'react'
import './Style.css'

export const Usuario = ({user}) => {
  return (
    <li className="ListaUsuarios">{user.name}</li>
  )
}
