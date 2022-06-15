import Nav from "./Nav"





/*
async function saveMessage() {
  // Add a new message entry to the Firebase database.
  try {
    await addDoc(collection(getFirestore(appFire), 'lojanova'), {
      titulo: "Lorem ipsum dolor sit amet",
      marca:"by Lorem Ipsum",
      preco:300.00,
      imagem:"https://firebasestorage.googleapis.com/v0/b/loja-549e1.appspot.com/o/loja%2Fluxo-1.jpg?alt=media&token=ccff4116-8c2c-4803-905e-8971dd5ecaba",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, modi? Minima libero doloremque necessitatibus! Praesentium recusandae quod nesciunt animi voluptatem!",
      timestamp: serverTimestamp()
    });
  }
  catch(error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}

//console.log(saveMessage())
*/


const Produto = async ()=>{
    return (
        <div>


<>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />

  {/* navbar */}
      <Nav navbar="navbar page" />
  {/* end of navbar*/}
  {/* page hero */}
  <section className="page-hero">
    <div className="section-center">
      <h3 className="page-hero-title">Inicio / Lista de Produtos</h3>
    </div>
  </section>
  {/* product info */}
  <section className="single-product section">
    <div className="section-center single-product-center">
      <img
        src="https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg"
        className="single-product-img img"
        alt=""
      />
      <article className="single-product-info">
        <div>
          <h2 className="single-product-title">high-back bench</h2>
          <p className="single-product-company text-slanted">by marcos</p>
          <span className="single-product-price">$30.00</span>
          <div className="single-product-colors">
            <span className="product-color" />
            <span className="product-color product-color-red" />
          </div>
          <p className="single-product-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, modi?
            Minima libero doloremque necessitatibus! Praesentium recusandae quod
            nesciunt animi voluptatem!
          </p>
          <button className="addToCartBtn btn" data-id="id">
            add to cart
          </button>
        </div>
      </article>
    </div>
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
</>


        </div>
    )}

    export default Produto