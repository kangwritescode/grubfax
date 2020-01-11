import React from 'react'
import './Landing.css'
import ZipForm from './ZipForm/ZipForm'
import 'react-awesome-button/dist/styles.css'

const Landing = ({ setAddressData }) => {
  return (
    <div className='Landing'>
      <h1 className='Landing__header zoomInDown'>GrubFax</h1>
      <h4 className='Landing__sub-header bounceInDown'>Food Data Near You</h4>
      <ZipForm setAddressData={setAddressData} />
    </div>
  )
}

export default Landing
