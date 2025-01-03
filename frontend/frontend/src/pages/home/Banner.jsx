import React from 'react'
import { Link } from 'react-router'
import bannerImg from '../../assets/header.png'

const Banner = () => {
  return (
    <div className='section-container header-container'>
        <div className='header-content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount on</h4>
            <h1>Girl's Fashion</h1>
            <p>Discover the latest in girls' fashion with our trendy collection of stylish outfits, perfect for every occasion. From casual wear to elegant pieces, we offer a variety of options to express your unique style.</p>
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