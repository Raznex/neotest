import React from 'react';
import { Link } from 'react-router-dom';
import Vk from '../../assets/images/VK.svg';
import WhatsApp from '../../assets/images/Whatsapp.svg';
import Telegram from '../../assets/images/Telegram.svg';
import Planet from '../../assets/images/Group.svg';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>QPICK</h2>
      <nav className='footer__navigate'>
        <ul className='footer__list'>
          <li>
            <Link to='/' className='footer__link'>
              Избранное
            </Link>
          </li>
          <li>
            <Link to='/basket' className='footer__link'>
              Корзина
            </Link>
          </li>
          <li>
            <Link to='/' className='footer__link'>
              Контакты
            </Link>
          </li>
        </ul>
        <ul className='footer__list'>
          <li>
            <Link to='/' className='footer__link'>
              Условия сервиса
            </Link>
          </li>
          <li>
            <div className='footer__container-language'>
              <img src={Planet} alt='' className='footer__planet' />
              <Link
                to='/'
                className='footer__language footer__language_is-active'
              >
                Рус
              </Link>
              <Link to='/' className='footer__language'>
                Eng
              </Link>
            </div>
          </li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__icon-container'>
            <Link to='/' className='footer__icon-li'>
              <img src={Vk} alt='Vk' className='footer__icon' />
            </Link>
            <Link to='/' className='footer__icon-li'>
              <img src={Telegram} alt='Telegram' className='footer__icon' />
            </Link>
            <Link to='/' className='footer__icon-li'>
              <img src={WhatsApp} alt='WhatsApp' className='footer__icon' />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
