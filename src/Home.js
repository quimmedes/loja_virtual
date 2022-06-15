
import logoblack from './assets/logo-black.svg';
import logowhite from './assets/logo-white.svg';
import Nav from './Nav';

const Home = ()=>{
return (
    <div>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"  />

  <Nav navbar="navbar"/>
 


  {/* hero */}
  <section className="hero">
    <div className="hero-container">
      <h1 className="text-slanted">rest, relax, unwind</h1>
      <h3 className="text-slanted">embrace your choices - we do</h3>
      <a href="./products.html" className="btn hero-btn text-slanted">
        shop now
      </a>
    </div>
  </section>
  {/* featured products */}
  <section className="section featured">
    <div className="title">
      <span />
      <h2>featured</h2>
      <span />
    </div>
    <div className="section-center featured-center">
      {/* single product */}
      <article className="product">
        <div className="product-container">
          <img
            src="https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg"
            className="product-img img"
            alt=""
          />
          <div className="product-icons">
            <a href="single-product.html" className="product-icon">
              <i className="fas fa-search" />
            </a>
            <button className="product-cart-btn product-icon" data-id={1}>
              <i className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
        <footer>
          <h5 className="product-name">high-back bench</h5>
          <span className="product-price">$9.99</span>
        </footer>
      </article>
      {/* end of single product */}
      {/* single product */}
      <article className="product">
        <div className="product-container">
          <img
            src="https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg"
            className="product-img img"
            alt=""
          />
          <div className="product-icons">
            <a href="single-product.html" className="product-icon">
              <i className="fas fa-search" />
            </a>
            <button className="product-cart-btn product-icon" data-id={1}>
              <i className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
        <footer>
          <h5 className="product-name">leather sofa</h5>
          <span className="product-price">$9.99</span>
        </footer>
      </article>
      {/* end of single product */}
      {/* single product */}
      <article className="product">
        <div className="product-container">
          <img
            src="https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg"
            className="product-img img"
            alt=""
          />
          <div className="product-icons">
            <a href="single-product.html" className="product-icon">
              <i className="fas fa-search" />
            </a>
            <button className="product-cart-btn product-icon">
              <i className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
        <footer>
          <h5 className="product-name">entertainment center</h5>
          <span className="product-price">$9.99</span>
        </footer>
      </article>
      {/* end of single product */}
    </div>
    <a href="products.html" className="btn">
      {" "}
      all products{" "}
    </a>
  </section>
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
          <a href="index.html" className="sidebar-link">
            <i className="fas fa-home fa-fw" />
            home
          </a>
        </li>
        <li>
          <a href="products.html" className="sidebar-link">
            <i className="fas fa-couch fa-fw" />
            products
          </a>
        </li>
        <li>
          <a href="about.html" className="sidebar-link">
            <i className="fas fa-book fa-fw" />
            about
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
          <a href="index.html" className="sidebar-link">
            <i className="fas fa-home fa-fw" />
            home
          </a>
        </li>
        <li>
          <a href="products.html" className="sidebar-link">
            <i className="fas fa-couch fa-fw" />
            products
          </a>
        </li>
        <li>
          <a href="about.html" className="sidebar-link">
            <i className="fas fa-book fa-fw" />
            about
          </a>
        </li>
      </ul>
    </aside>
  </div>
  {/* end of sidebar */}
  {/* cart */}
  <div className="cart-overlay">
    <aside className="cart">
      <button className="cart-close">
        <i className="fas fa-times" />
      </button>
      <header>
        <h3 className="text-slanted">your bag</h3>
      </header>
      {/* cart items */}
      <div className="cart-items">
        {/* single cart item */}
        <article className="cart-item">
          <img
            src="https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg"
            className="cart-item-img"
            alt="product"
          />
          <div className="cart-item-info">
            <h5 className="cart-item-name">high-back bench</h5>
            <span className="cart-item-price">$19.99</span>
            <button className="cart-item-remove-btn">remove</button>
          </div>
          <div>
            <button className="cart-item-increase-btn">
              <i className="fas fa-chevron-up" />
            </button>
            <span className="cart-item-amount">1</span>
            <button className="cart-item-decrease-btn">
              <i className="fas fa-chevron-down" />
            </button>
          </div>
        </article>
        {/* end of single cart item */}
        {/* single cart item */}
        <article className="cart-item">
          <img
            src="https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg"
            className="cart-item-img"
            alt="product"
          />
          <div className="cart-item-info">
            <h5 className="cart-item-name">product</h5>
            <span className="cart-item-price">$19.99</span>
            <button className="cart-item-remove-btn">remove</button>
          </div>
          <div>
            <button className="cart-item-increase-btn">
              <i className="fas fa-chevron-up" />
            </button>
            <span className="cart-item-amount">1</span>
            <button className="cart-item-decrease-btn">
              <i className="fas fa-chevron-down" />
            </button>
          </div>
        </article>
        {/* end of single cart item */}
      </div>
      {/* footer */}
      <footer>
        <h3 className="cart-total text-slanted">total : $12.99</h3>
        <button className="cart-checkout btn">checkout</button>
      </footer>
    </aside>
  </div>
  {/* app.js */}




    </div>
)


}


export default Home;