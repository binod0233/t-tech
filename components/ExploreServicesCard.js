import React from 'react'
import Button from './Button'

const ExploreServicesCard = () => {
  return (
    <div className='card px-2 py-3 w-75 m-auto d-flex justify-content-center align-items-center' style={{height:'', width:''}}>
      <div className="card-body d-flex flex-column justify-content-center ">
      <div className="card-image"></div>
        <div className="card-title">Product Design</div>
        <div className="card-subtitle">Bringing heart and soul to create products that will maximize user experience and satisfy business metrics while looking just stunning.</div>
        <div className="card-text">
          <ul>
            <li>Exceptional concept work </li>
            <li>Best UX practices</li>
            <li>Consistent visual identity</li>
<li> Constant product improvement</li>
          </ul>
        </div>
<div className="card-btn"><Button name='Read More' className='btn-dark'/></div>
      </div>
    </div>
  )
}

export default ExploreServicesCard
