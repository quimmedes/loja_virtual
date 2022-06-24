
import Item from "./Item"
import { useState, useEffect, useContext } from 'react';
import { useGlobalContext } from "./Context";






const Produtos = ()=>{


  const {todos, cartFunctions} = useGlobalContext()


    return (
      
        <div>

          {/* font awesome */}

 
  {/* navbar */}
  {cartFunctions().setT("navbar page")}



  {/* products */}
  <section className="products">
    {/* filters */}
    <div className="filters">
      <div className="filters-container">
        {/* search */}
        <form className="input-form">
          <input type="text" className="search-input" placeholder="pesquisar..." />
        </form>
        {/* categories */}
        <h5>Categorias</h5>
        <article className="companies">
          <button className="company-btn">todos</button>
          <button className="company-btn">Lorem</button>
          <button className="company-btn">Ipsum</button>
          <button className="company-btn">Amet</button>
        </article>
        {/* price */}
        <h5>Preço</h5>
        <form className="price-form">
          <input
            type="range"
            className="price-filter"
            min={0}
            defaultValue={50}
            max={100}
          />
        </form>
        <span className="price-value">Valor : R$300</span>
      </div>
    </div>
    {/* products */}
    <div className="products-container">
      {/* single product */}
            

      {todos && todos.map(it => <Item key={it.id} arr={it} cartFunctions={cartFunctions} />)}  


      {/* end of single product */}
     
    </div>
  </section>





            </div>)
}


export default Produtos

