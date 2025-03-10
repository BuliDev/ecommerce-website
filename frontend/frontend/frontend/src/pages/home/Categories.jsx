import React from 'react'

import category1 from '../../assets/category-1.jpg'
import category2 from '../../assets/category-2.jpg'
import category3 from '../../assets/category-3.jpg'
import category4 from '../../assets/category-4.jpg'
import { Link } from 'react-router'

const Categories = () => {
    const categories = [
        {name: 'Accessories', path: 'accessories', image: category1},
        {name: 'Dress Collection', path: 'dress', image: category2},
        {name: 'Jewellery', path: 'jewellery', image: category3},
        {name: 'Cosmetics', path: 'cosmetics', image: category4}
    ]
  return (
    <>
        <div className='product-grid'>
            {
                categories.map((category) => (
                    <Link key={category.name} to={`/categories/${category.path}`} className='categories-card'>
                        <img src={category.image} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))
            }
        </div>
    </>
  )
}

export default Categories