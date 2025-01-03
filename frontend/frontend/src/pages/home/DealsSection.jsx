import React from 'react'
import dealsImg from '../../assets/deals.png'

const DealsSection = () => {
  return (
    <section className='section-container deals-container'>
        <div className='deals-img'>
            <img src={dealsImg} alt="" />
        </div>

        <div className='deals-content'>
            <h5>Get Up To 20% Discount</h5>
            <h4>Deals Of This Month</h4>
            <p>Take advantage of our incredible monthly deals and enjoy up to 20% off on the most stylish and trendy girls' fashion. Find the perfect outfits and accessories to elevate your look effortlessly!</p>
            <div className='deals-countdown flex-wrap'>
                <div className='deals-countdown-card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals-countdown-card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals-countdown-card'>
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
                <div className='deals-countdown-card'>
                    <h4>5</h4>
                    <p>Secs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealsSection