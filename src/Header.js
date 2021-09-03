import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import './Header.css'
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue()

    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" alt="" src="https://dredgarhernandez.com/wp-content/uploads/2017/05/otboad-logo-amazon.png" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user?.email :'Guest'}</span>
                        <span className="header__optionLineTwo">{user? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBusket">
                        <ShoppingBasketIcon className="header__busketIcon" />
                        <span className="header__optionLineTwo header__busketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
