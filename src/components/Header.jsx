import React from 'react'
import './Header.scss'
import Logo from 'assets/svgs/Common/logo.svg';


const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="logo" />
            Header</div>
    )
}

export default Header