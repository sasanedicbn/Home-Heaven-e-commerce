import React, { useEffect, useRef, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

type NavBarProps = {
  heroRef: React.RefObject<HTMLDivElement>;
};

const NavBar: React.FC<NavBarProps> = ({ heroRef }) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((state) => !state);
  };

  const handleScroll = () => {
    if (heroRef.current && navRef.current) {
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      if (window.scrollY > heroBottom) {
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
        {/* ZAMJENITI OVO A POSLIJE SA <LINK TO="/"/> */}
        <a className="nav-list-item-link" href="/">
          <div className="logo-div">
            <BsBag />
            <span className="logo-text">Home Heaven</span>
          </div>
        </a>
        <ul className={`nav-list ${isOpenMenu ? 'isOpen' : ''}`}>
          <a className="nav-list-item-link active-link" href="/">
            <li className="nav-list-item">Home</li>
          </a>
          <a className="nav-list-item-link" href="/products">
            <li className="nav-list-item">Products</li>
          </a>
          <div className="shopping-card">
            <div className="icon-text">
              <span>Cart</span>
              <a href="/" className="cart-icon">
                <BsBag />
              </a>
            </div>
            <span className="badge">0</span>
          </div>
        </ul>
        <button className="hamburger" onClick={toggleMenu}>
          {isOpenMenu ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </section>
    <Outlet/>
    </>
  );
};

export default NavBar;
