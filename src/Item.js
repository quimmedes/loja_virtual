
const Item = ({ arr }) =>{

return(
    <article className="product">
        <div className="product-container">
          <img
            src={arr.item.imagem}
            className="product-img img"
            alt=""
          />
          <div className="product-icons">
            <a href="/produtos" className="product-icon">
              <i className="fas fa-search" />
            </a>
            <button className="product-cart-btn product-icon" data-id={1}>
              <i className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
        <footer>
          <h5 className="product-name">{arr.item.titulo}</h5>
          <span className="product-price">{arr.item.preco}</span>
        </footer>
      </article>
);
    
}


export default Item