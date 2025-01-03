import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products'
import ProductCards from '../shop/ProductCards'

const CategoryPage = () => {
  const { categoryName } = useParams()
  const [filteredProducts, setFilteredProducts] = React.useState([''])

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    )

    setFilteredProducts(filtered)
  }, [categoryName])

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <section className='section-container bg-primary-light'>
        <h2 className='section-header capitalize'>{categoryName}</h2>
        <p className='section-subheader'>
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>

      <div className='section-container'>
        <ProductCards products={filteredProducts} />
      </div>
    </>
  )
}

export default CategoryPage
