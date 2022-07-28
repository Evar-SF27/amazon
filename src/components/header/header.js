import React from 'react'
import './styles/header.css'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src='/assets/logos/amazon_logo_2.png' alt='logo'/>
      
      <div className = 'header__search'>
      <div className='header__location'>
        <LocationOnOutlinedIcon className='location__logo' />
        <div className='header__option_1'>
          <span className='header__optionLineOne'>Deliver to</span>
          <span className='header__optionLineTwo'>Cameroon</span>
        </div>
      </div>
        <input className='header__searchInput' type='text' />
        {/* search Logo */}
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
      </div>

    </div>
  )
}

export default Header