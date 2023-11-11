/**
 * Componente de autenticacion de usuarios
 */

import React, { useState } from 'react'

const loginForm = () => {

    const initialCredentials=[ 
        { 
            user: '', 
            password: ''
        }
    ]; 
    const [creadentials, setCredentials]=useState(initialCredentials); 
  return (
    <div>
      
    </div>
  )
}

export default loginForm
