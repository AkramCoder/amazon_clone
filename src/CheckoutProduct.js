import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct" id={id}>
            <img className="checkoutProduct__image" src={image} alt=""/>
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <smal>$</smal>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from busket</button>
            </div>
        </div>

        
    )
}

export default CheckoutProduct
