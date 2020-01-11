import React from 'react'
import binary from '../../assets/binary.mov'
import './Background.css'

const Background = props => {
  return (
    <React.Fragment>
      <video className='background' src={binary} loop autoPlay></video>
      {props.children}
    </React.Fragment>
  )
}

export default Background
