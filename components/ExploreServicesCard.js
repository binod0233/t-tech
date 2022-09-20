import React from 'react'
import Button from './Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ExploreServicesCard = ({ id, image }) => {
  return (
    <div>

      <div key={id} className='card px-2 py-3 d-flex justify-content-center align-items-center' style={{ height: '65vh', width: '' }}>
        <div className="card-body d-flex flex-column justify-content-center ">
          <div className="card-image" style={{height:'75px', width:'75px'}}>
            <img src={image} alt='card image' style={{height:'inherit', width:'inherit', objectFit:'cover'}} />
          </div>
          <div className='h2 pt-3' style={{ fontWeight: '600' }}>Product Design</div>
          <div className="card-subtitle">Bringing heart and soul to create products that will maximize user experience and satisfy business metrics while looking just stunning.</div>
          <div className="card-text pt-3">
            <div>
              <div>
                <span><CheckCircleIcon /></span>
                <span>Exceptional concept work</span>
              </div>
              <div>
                <span><CheckCircleIcon /></span>
                <span>Best UX practices</span>
              </div>
              <div>
                <span><CheckCircleIcon /></span>
                <span>Consistent visual identity</span>
              </div>
              <div>
                <span><CheckCircleIcon /></span>
                <span> Constant product improvement</span>
              </div>
            </div>
          </div>
          <div className="card-btn pt-3"><Button name='Read More' borderRadius='40px' className='btn-dark' BtnIcon={<ArrowForwardIcon/>} /></div>
        </div>
      </div>

    </div>
  )
}

export default ExploreServicesCard
