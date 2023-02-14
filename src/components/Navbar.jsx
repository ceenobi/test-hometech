import React from 'react'
import {Stack, Image} from 'react-bootstrap'
import logo from '../assets/Ellipse 460.png'

export default function Navbar() {
  return (
    <div className='container.xxl p-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <div
          className='d-flex gap-2 '
          style={{ height: '100%' }}
        >
          <Image src={logo} alt='logo' />
          <p className='logo align-self-center mt-3'>HomeTech</p>
        </div>
        <p className='about mt-3'>About us</p>
      </div>
    </div>
  )
}
