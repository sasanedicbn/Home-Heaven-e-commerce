import { BsBag } from 'react-icons/bs';
const NavBar = () => {
    return(
    <section className='section-navbar'>
        <nav>
            {/* ZAMJENITI OVO A POSLIJE SA <LINK TO="/"/> */}
            <a className="nav-list-item-link" href="/">
                <div className="logo-div">
                  <BsBag/>
                  <span className='logo-text'>Home Heaven</span>
                </div>
            </a>
            <ul className='nav-list'>
                <a className='nav-list-item-link active-link'href='/'>
                   <li className="nav-list-item">Home</li>
                </a>
                <a className='nav-list-item-link' href='/products'>
                   <li className="nav-list-item">Products</li>
                </a>
            </ul>
            <div className='shopping-card'>
              <div className='icon-text'>
                <span>Cart</span>
                  <a href='/' className='cart-icon'>
                  <BsBag />
                  </a>
              </div>
               <span className="badge">0</span>
            </div>
        </nav>
    </section>

    )
} 
export default NavBar;