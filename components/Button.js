import React from 'react'

const Button = ({name, className,BtnIcon, borderRadius}) => {
  return (
    <button 
    type="submit" 
    className={`btn ${className}`}
   style={{
    borderRadius:borderRadius,
    padding:'.4rem .8rem'
   }}
    >
   <span>{name} </span><span className='ms-2'>{BtnIcon}</span>
    </button>
  )
}

export default Button