import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image" 
                src="https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg" />
            
                <div className="home__row">
                    <Product id={1} title="The lean startup 1" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5} />
                    <Product id={2} title="OtterBox SYMMETRY CLEAR SERIES Case for iPhone 12 Pro Max - CLEAR" price={334.99} image="https://m.media-amazon.com/images/I/51f6+2B8RiL._AC_SX679_.jpg" rating={4} />
                    
                </div>
                <div className="home__row">
                    <Product id={3} title="Listerine Total Care Anticavity Mouthwash" price="6.78" image="https://m.media-amazon.com/images/I/81vNiROdiIL._SX679_.jpg" rating={5} />
                    <Product id={4} title="Homall Gaming Chair Office Chair High Back Computer Chair" price={561.99} image="https://m.media-amazon.com/images/I/61HEqHMkRhL._AC_SX679_.jpg" rating={4} />
                    <Product id={5} title='LG DQHD Monitor 49" 32:9 Curved DQHD (5120 x 1440) Display' price={655.99} image="https://m.media-amazon.com/images/I/717V3tRw7+L._AC_SX679_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product id={6} title="Canon EOS RP Full-frame Mirrorless Interchangeable" price={1024.99} image="https://m.media-amazon.com/images/I/811+58GXGOL._AC_SX679_.jpg" rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
