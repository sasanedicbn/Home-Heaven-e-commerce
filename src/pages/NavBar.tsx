import React, { useEffect, useRef, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { NavBarProps, Product } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const NavBar: React.FC<NavBarProps> = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const cartItems = useSelector((state:RootState) => state.cart.cart as Product[])
  const cartItemsinCart = cartItems.reduce((total, products) => {
    return total + products.quantity;
  }, 0)
  console.log('iz nava',cartItemsinCart)

  const toggleMenu = () => {
    setOpenMenu((state) => !state);
  };

  const handleScroll = () => {
    if (navRef.current) {
      if (window.scrollY > 750) {
        navRef.current.classList.add('section-navbar');
      } else {
        navRef.current.classList.remove('section-navbar');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section ref={navRef}>
        <nav>
          <a className="nav-list-item-link" href="/">
            <div className="logo-div">
              <BsBag />
              <span className="logo-text">Home Heaven</span>
            </div>
          </a>
          <ul className={`nav-list ${isOpenMenu ? 'isOpen' : ''}`}>
            <Link className="nav-list-item-link active-link" to="/">
              <li className="nav-list-item">Home</li>
            </Link>
            <a className="nav-list-item-link" href="/products">
              <li className="nav-list-item">Products</li>
            </a>
            <div className="shopping-card">
              <div className="icon-text">
              <Link to="/cart" className="cart-icon">
                <span>Cart</span>
                  <BsBag />
                </Link>
              </div>
              <span className="badge">{cartItemsinCart}</span>
            </div>
          </ul>
          <button className="hamburger" onClick={toggleMenu}>
            {isOpenMenu ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </section>
      <Outlet />
    </>
  );
};

export default NavBar;

