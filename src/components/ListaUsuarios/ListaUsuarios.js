import React from 'react'
import {users} from './../db/users'

export const ListaUsuarios = () => {
  return (
    <div>
        <ul>
            {users.map((user) =>(
                  <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}
