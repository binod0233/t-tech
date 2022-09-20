import React from 'react'
import ExploreServicesCard from './ExploreServicesCard'
import { CARD_DATA } from './mockdata/datas'

const Hero = () => {
  return (
    <div>
      {CARD_DATA.map((v,key)=>(
          <ExploreServicesCard id={v.id} image={v.image}/>
      ))
      }
    </div>
  )
}

export default Hero