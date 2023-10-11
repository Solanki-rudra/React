import React from 'react'

function ProtectedRoute({ Component}) {
  return (
    <div>
      <Component />
    </div>
  )
}

export default ProtectedRoute
