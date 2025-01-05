import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RatingStar from '../../../components/RatingStar'
import products from '../../../data/products.json'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/features/cart/cartSlice'

const SingleProduct = () => {
  const { id } = useParams()

  const product = products.find((product) => product.id === parseInt(id))

  if (!product) {
    return <p>Product not found</p>
  }

  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <>
      <section className='section-container bg-primary-light'>
        <h2 className='section-header capitalize'>Single Product Page</h2>
        <div className='section-subheader space-x-2'>
          <span className='hover:text-primary'>
            <Link to='/'>home</Link>
          </span>
          <i className='ri-arrow-right-s-line'></i>
          <span className='hover:text-primary'>
            <Link to='/shop'>shop</Link>
          </span>
          <i className='ri-arrow-right-s-line'></i>
          <span className='hover:text-primary'>{product.name}</span>
        </div>
      </section>

      <section className='section-container mt-8'>
        <div className='flex flex-col items-center md:flex-row gap-8'>
          <div className='md:w-1/2 w-full'>
            <img
              src={product.image}
              alt=''
              className='rounded-md w-full h-auto'
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <h3 className='text-2xl font-semibold mb-4'>{product.name}</h3>
            <p className='text-xl text-primary mb-4'>
              ${product.price} <s>${product.oldPrice}</s>
            </p>
            <p className='text-gray-400 mb-4'>{product.description}</p>

            <div>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Color:</strong> {product.color}
              </p>
              <div className='flex gap-1 items-center'>
                <strong>Rating:</strong>
                <RatingStar rating={product.rating} />
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className='mt-6 px-6 py-3 bg-primary text-white rounded-md'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct
