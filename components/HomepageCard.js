import React from 'react'
import Paragraph from './Paragraph'
import Title from './Title'
const HomepageCard = ({id,image}) => {
  return (
    <div>

    <div key={id}  className='card px-2 py-3 d-flex justify-content-center align-items-center' style={{ height: '65vh', width: '' }}>
      <div className="card-body d-flex flex-column justify-content-center ">
        <div className="card-image" style={{height:'75px', width:'75px'}}>
          <img src={image} alt='card image' style={{height:'inherit', width:'inherit', objectFit:'cover'}} />
        </div>
        <Title className='mt-1' title='Product Design'/>
      <Paragraph content="Bringing heart and soul to create products that will maximize user experience and satisfy business metrics while looking just stunning."/>
        
      </div>
    </div>

  </div>
  )
}

export default HomepageCard
