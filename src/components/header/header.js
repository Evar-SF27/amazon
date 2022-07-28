import React from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useStateValue } from '../../Context/stateProvider'

function Header() {
  const[{ basket }] = useStateValue()
  return (
    <div className='header'>
      <Link to='/'>
        <img 
          className='header__logo' 
          src='/assets/logos/amazon_logo_2.png' 
          alt='logo'
        />
      </Link>
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
          <Link to='/checkout'>
            <ShoppingBasketIcon className='shopping_basket'/>
          </Link>
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
      </div>

    </div>
  )
}

export default Header