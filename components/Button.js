import React from 'react'
import Paragraph from './Paragraph'

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
   <Paragraph content={name}/><span className='ms-2'>{BtnIcon}</span>
    </button>
  )
}

export default Button