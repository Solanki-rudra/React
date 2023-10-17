import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({Component}) {
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login')
        if(login === 'false'){
            navigate('/login')
        }
    }, []);
  return (
    <div>
      <Component />
    </div>
  )
}

export default ProtectedRoute
