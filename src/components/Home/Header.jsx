import React from 'react'
import './Header.scss'
import svgs from 'assets/svgs'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StoreIcon from '@mui/icons-material/Store';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

import images from 'assets/imgs';


const Header = () => {
    return (
        <div className='header'>
            <div className="header__wrapper">
                <EmojiFoodBeverageIcon
                    className='hamburger-btn'
                //   onClick={showBurgerNav}
                />
                <img className='header__logo' src={svgs.logo} alt="logo" />
                <ul className="header__list">
                    <li className='header__item'>
                        <HomeIcon />Pages</li>
                    <li className='header__item'>
                        <LocalDiningIcon />Order online</li>
                    <li className='header__item'>
                        <LibraryBooksIcon />News</li>
                    <li className='header__item'>
                        <StoreIcon />Store locations</li>
                </ul>



                <div>
                    <div className="header__cart">
                        <ShoppingCartIcon />
                        <span className='header__cart__qnt'>3</span>
                    </div>
                </div>
                <div className='header__acount'>
                    <img className='header__ava' src={images.ava} alt="ava" />
                    <span className='header__username'>Phan Phan</span>
                </div>

            </div>
        </div>
    )
}

export default Header