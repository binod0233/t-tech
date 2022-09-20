import React from 'react'
import Button from './Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Title from './Title';
import Paragraph from './Paragraph';
const ExploreServicesCard = ({ id, image }) => {
  return (
    <div>

      <div key={id} className='card px-2 py-3 d-flex justify-content-center align-items-center' style={{ height: '65vh', width: '' }}>
        <div className="card-body d-flex flex-column justify-content-center ">
          <div className="card-image" style={{height:'75px', width:'75px'}}>
            <img src={image} alt='card image' style={{height:'inherit', width:'inherit', objectFit:'cover'}} />
          </div>
          <div className='pt-3'>
            <Title title='Product Design'/>
          </div>
      <Paragraph content="Bringing heart and soul to create products that will maximize user experience and satisfy business metrics while looking just stunning."/>

          <div className="card-text pt-3">
            <div>
              <div className='d-flex align-items-center'>
                <div><CheckCircleIcon /></div>
               <div><Paragraph content='Exceptional concept work' /></div>
              </div>
          
              <div className='d-flex align-items-center'>
                <div><CheckCircleIcon /></div>
               <div><Paragraph content='Best UX practices' /></div>
              </div>
              
              <div className='d-flex align-items-center'>
                <div><CheckCircleIcon /></div>
               <div><Paragraph content='Consistent visual identity' /></div>
              </div>
              
              <div className='d-flex align-items-center'>
                <div><CheckCircleIcon /></div>
               <div><Paragraph content='Constant product improvement' /></div>
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
