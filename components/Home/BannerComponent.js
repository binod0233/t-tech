import React from 'react'
import styles from '../../styles/BannerComponent.module.css'

const BannerComponent = () => {
  return (
    <div className={`${styles.homeBannerComponentContainer} mx-auto`}>
        <div className={`${styles.homeBannerComponent}  pt-5 `}>
        <div className={`${styles.upperImage} `}  >

        </div>
        <div className={`${styles.lowerImage} mt-2`}>
            </div>

</div>
    </div>
  )
}

export default BannerComponent