import './css/styles.css'

import logowhite from './assets/logo-white.svg';
import logoblack from './assets/logo-black.svg';


const Nav = (props)=>{
    return(
        <div>
        <nav className = {props.navbar} >
        <div className="nav-center">
          {/* links */}
          <div>
            <button className="toggle-nav">
              <i className="fas fa-bars" />
            </button>
            <ul className="nav-links">
              <li>
                <a href="/" className="nav-link">
                  {" "}
                  home{" "}
                </a>
              </li>
              <li>
                <a href="produtos" className="nav-link">
                  {" "}
                  products{" "}
                </a>
              </li>
              <li>
                <a href="sobre" className="nav-link">
                  {" "}
                  about{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* logo */}
          <img src={logowhite} className="nav-logo" alt="logo" />
          {/* cart icon */}
          <div className="toggle-container">
            <button className="toggle-cart">
              <i className="fas fa-shopping-cart" />
            </button>
            <span className="cart-item-count">2</span>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Nav