import React from 'react'
import { Link } from 'react-router'
import bannerImg from '../../assets/header.png'

const Banner = () => {
  return (
    <div className='section-container header-container'>
        <div className='header-content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount on</h4>
            <h1>Bike Helmets</h1>
            <p>Discover our wide range of high-quality motorcycle helmets designed for safety and comfort. Shop now and save up to 20% on select models.</p>
            <button className='btn'>
                <Link to='/shop'>
                    EXPLORE NOW
                </Link>
            </button>
        </div>
        <div className='header-image'>
            <img src={bannerImg} alt="banner image" />
        </div>
    </div>
  )
}

export default Banner