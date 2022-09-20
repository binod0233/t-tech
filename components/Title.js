import React from 'react'

const Title = ({className, title}) => {
  return (
    <div className={`h2 ${className}`} style={{ fontWeight: '600' }}>{title}</div>
  )
}

export default Title