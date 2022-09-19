import React from 'react'

const Button = ({name, className}) => {
  return (
    <button 
    type="submit" 
    className={`btn ${className}`}
   
    >
   {name} 
    </button>
  )
}

export default Button