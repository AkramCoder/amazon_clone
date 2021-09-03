import React from 'react'
import StarIcon from '@material-ui/icons/Star';

import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue()

    const addToBasket = () => {
        // dispatch the item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id, 
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                    
                </div>
            </div>

            <img src={image} />
            <button onClick={addToBasket}>Add to busket</button>
        </div>
    )
}

export default Product
