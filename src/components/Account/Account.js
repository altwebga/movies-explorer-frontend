import React from 'react'
import { Link } from 'react-router-dom';
import './Account.css'

function Account() {
  return (
    <nav className='header__navigate'>
      <Link className='header__navigate-text' to='/profile'>Аккаунт</Link >
      <svg className='header__navigate-img'></svg>
    </nav>
  )
}

export default Account