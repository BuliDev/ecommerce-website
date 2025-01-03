import React from 'react'
import ProductCards from './ProductCards'

import products from '../../data/products.json'

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = React.useState(8)

    const loadMoreProducts = () => {
        setVisibleProducts((prevValue) => prevValue + 4)
    }
  return (
    <section className='section-container product-container'>
        <h2 className='section-header'>Trending Products</h2>
        <p className='section-subheader'>
            Discover our top picks of trending products that everyone loves! Shop now and stay ahead in style!
        </p>

        <div className="mt-12">
            <ProductCards products={products.slice(0, visibleProducts)} />
        </div>

        <div className='text-center'>
            {
                visibleProducts < products.length && (
                    <button className='btn' onClick={loadMoreProducts}>Load More</button>
                )
            }
        </div>
    </section>
  )
}

export default TrendingProducts