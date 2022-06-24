import './css/styles.css'


import {  useContext, useEffect, useState } from "react";
import CartItem from './CartItem';
import { useGlobalContext } from './Context';


const Nav = ()=>{


  const [isActive, setIsActive] = useState(false);
  const [isCartActive, setCartIsActive] = useState(false);
  const {cart, cartFunctions, thema} = useGlobalContext()
  const [total, setTotal] = useState(0)


  //ADD, REMOVE OU TOOGLE CLASSES on CLICK
  /*const handleClick = event => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('bg-salmon');

    // 👇️ add class on click
    // event.currentTarget.classList.add('bg-salmon');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  };*/ 


 const updateTotal=()=>{
  var t = 0
  cart && cart.forEach(c=>{
    t+=c.item.preco*c.qt
  })
  setTotal(t)
 }

  useEffect(()=>{

    updateTotal()

  }, [cart, total])

  const handleCartClick = event => {
    // 👇️ toggle isActive state on click
    setCartIsActive(current => !current);
   
  };

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };


    return(
        <div>
            <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
    
        <nav className = {thema} >
        <div className="nav-center">
          {/* links */}
          <div>
            <button onClick={handleClick}  className="toggle-nav">
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
                <a href="/produtos" className="nav-link">
                  {" "}
                  produtos{" "}
                </a>
              </li>
              <li>
                <a href="/sobre" className="nav-link">
                  {" "}
                  sobre{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* logo */}
      
          {/* cart icon */}
          <div className="toggle-container">
            <button onClick={handleCartClick} className="toggle-cart">
              <i className="fas fa-shopping-cart" />
            </button>
            <span className="cart-item-count">{cart && cart.length}</span>
          </div>
        </div>
      </nav>

        {/* sidebar */}
  <div className={ isActive? "show sidebar-overlay":"sidebar-overlay"}>
    <aside className="sidebar">
      {/* close */}
      <button onClick={handleClick} className="sidebar-close">
        <i className="fas fa-times" />
      </button>
      {/* links */}
      <ul className="sidebar-links">
        <li>
          <a href="/" className="sidebar-link">
            <i className="fas fa-home fa-fw" />
            home
          </a>
        </li>
        <li>
          <a href="/produtos" className="sidebar-link">
            <i className="fas fa-couch fa-fw" />
            produtos
          </a>
        </li>
        <li>
          <a href="/sobre" className="sidebar-link">
            <i className="fas fa-book fa-fw" />
            sobre
          </a>
        </li>
      </ul>
    </aside>
  </div>
  {/* sidebar */}
  <div className="sidebar-overlay">
    <aside className="sidebar">
      {/* close */}
      <button className="sidebar-close">
        <i className="fas fa-times" />
      </button>
      {/* links */}
      <ul className="sidebar-links">
        <li>
          <a href="/" className="sidebar-link">
            <i className="fas fa-home fa-fw" />
            home
          </a>
        </li>
        <li>
          <a href="/produtos" className="sidebar-link">
            <i className="fas fa-couch fa-fw" />
            produtos
          </a>
        </li>
        <li>
          <a href="/sobre" className="sidebar-link">
            <i className="fas fa-book fa-fw" />
            sobre
          </a>
        </li>
      </ul>
    </aside>
  </div>
  {/* end of sidebar */}
  {/* cart */}
  <div className={isCartActive? "show cart-overlay" : "cart-overlay"}  >
    <aside className="cart"  onMouseLeave={()=>{ if(isCartActive){handleCartClick()}}}>
      <button onClick={handleCartClick} className="cart-close">
        <i className="fas fa-times" />
      </button>
      <header>
        <h3 className="text-slanted">seu carrinho</h3>
      </header>
      {/* cart items */}
      <div className="cart-items">
       

        {/* single cart item */}

        {cart && cart.map(it => <CartItem key={it.id} props={it} cartFunctions={cartFunctions} />) }

        {/* end of single cart item */}
      </div>
      {/* footer */}
      <footer>
        <h3 className="cart-total text-slanted">total : R$ {total}</h3>
        <button className="cart-checkout btn">finalizar a compra</button>
      </footer>
    </aside>
  </div>
  {/* app.js */}

        
      </div>
    )
}

export default Nav