import React from 'react'

import productsData from '../../data/products'
import ProductCards from '../shop/ProductCards'

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [filteredProducts, setFilteredProducts] = React.useState(productsData)

  const handleSearch = () => {
    const query = searchQuery.toLowerCase()

    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    )

    setFilteredProducts(filtered)
  }

  return (
    <>
      <section className='section-container bg-primary-light'>
        <h2 className='section-header capitalize'>Search Products</h2>
        <p className='section-subheader'>
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>

      <section className='section-container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
          <input
            type='text'
            placeholder='Search for products...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar w-full max-w-4xl p-2 border rounded'
          />

          <button
            onClick={handleSearch}
            className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'
          >
            Search
          </button>
        </div>

        <ProductCards products={filteredProducts} />
      </section>
    </>
  )
}

export default Search