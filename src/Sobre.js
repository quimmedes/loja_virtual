import Nav from "./Nav"


const Produto = ()=>{
    return (
        <div>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
  />
  {/* main css */}
  <link rel="stylesheet" href="./css/styles.css" />
  {/* navbar */}
  
  <Nav navbar="navbar page"/>


  {/* end of navbar*/}
  {/* page hero */}
  <section className="page-hero">
    <div className="section-center">
      <h3 className="page-hero-title">Home / About</h3>
    </div>
  </section>
  {/* about */}
  <section className="section section-center">
    <div className="title">
      <span />
      <h2>our history</h2>
      <span />
    </div>
    <p className="about-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
      accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
      delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos
      quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi
      blanditiis est exercitationem molestiae delectus saepe odio eligendi modi
      porro eaque in libero minus unde sapiente consectetur architecto. Ullam
      rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
      quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
      iste.
    </p>
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


        </div> )
    }

    export default Produto