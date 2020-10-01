import React from 'react'

export function Alert({text, className}) {
  return (
    <div className={`alert alert-${className}`} role="alert">
      {text}
    </div>
  )
}
