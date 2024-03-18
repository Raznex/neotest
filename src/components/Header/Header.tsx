import React from 'react';
import { Link } from 'react-router-dom';
import './_Header.scss';

interface IHeader {
  basketCount: number;
}
const Header: React.FC<IHeader> = ({ basketCount }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>QPICK</h1>
      <div className='header__icon-container'>
        <Link to='/' className='header__like'>
          <div className='header__like-counter'>1</div>
        </Link>
        <Link to='/basket' className='header__basket'>
          <div className='header__like-counter'>{basketCount}</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
