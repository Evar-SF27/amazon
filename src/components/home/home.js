import React from 'react'
import Product from '../products/product'
import './styles/home.css'

function Home () {
  return (
    <div className=''>
        <div className='home__container'>
            <img className='home__image' src='/assets/img/background_1.jpg' alt='background' />
            <div className='home__row'>
                <Product
                    id='183488473843'
                    title='Gaming Headsets'
                    image='/assets/products/gaming/product_1.jpg'
                    price={156.99}
                    rating={4}
                />
                <Product
                    id='233232333423'
                    title='Cozy chair'
                    image='/assets/products/gaming/product_2.jpg'
                    price={499.99}
                    rating={5}
                />    
            </div>

            <div className='home__row'>
                <Product
                    id='173893903739'
                    title='Lenovo tablet '
                    image='/assets/products/laptops&tablets/product_1.webp'
                    price={299.99}
                    rating={3}
                />
                <Product
                    id='123789570326'
                    title='Tablet with keyboard'
                    image='/assets/products/laptops&tablets/product_2.webp'
                    price={349.99}
                    rating={3}
                />
                <Product
                    id='378452978289'
                    title='Pressure Cooker'
                    image='/assets/products/kitchen/product_6.jpg'
                    price={249.99}
                    rating={4}
                />
            </div>
            <div className='home__row'>
                <Product
                    id='383765626599'
                    title='Toilet accessories'
                    image='/assets/products/health/product_1.jpg'
                    price={279.99}
                    rating={3}
                />
            </div>
            <div className='home__row'>
                
            </div>
            <div className='home__row'></div>
            <div className='home__row'></div>
            <div className='home__row'></div>
            <div className='home__row'></div>
            <div className='home__row'></div>
            <div className='home__row'></div>
            <div className='home__row'></div>
            <div className='home__row'></div>
            <div className='home__row'></div>

        </div>
    </div>
  )
}

export default Home