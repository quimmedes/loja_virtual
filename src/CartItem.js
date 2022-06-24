const CartItem = ({props,cartFunctions})=>{

return(

    
           <article className="cart-item">
          <img
            src={props.item.imagem}
            className="cart-item-img"
            alt="product"
          />
          <div className="cart-item-info">
            <h5 className="cart-item-name">{props.item.titulo}</h5>
            <span className="cart-item-price">{props.item.preco}</span>
            <button className="cart-item-remove-btn" onClick={()=>cartFunctions().removeCart(props)}>remover</button>
          </div>
          <div>
            <button className="cart-item-increase-btn" onClick={()=>cartFunctions().increaseCart(props) }>
              <i className="fas fa-chevron-up" />
            </button>
            <span className="cart-item-amount">{props.qt}</span>
            <button className="cart-item-decrease-btn" onClick={()=>cartFunctions().decreaseCart(props)}>
              <i className="fas fa-chevron-down" />
            </button>
          </div>
        </article>
      
     
)

}

export default CartItem