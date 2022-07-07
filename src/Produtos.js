
import Item from "./Item"
import { useState, useEffect, useContext } from 'react';
import { useGlobalContext } from "./Context";
import getItemsByTitle from "./Functions/getItemsByTitle";


const Produtos = ()=>{


  const {todos, cartFunctions} = useGlobalContext()
  const [lista, setLista] = useState(todos)


  function searchItem(event) {
    if(event.key == "Enter"){
    const search = event.target.value
    const newLista = todos.filter(it=>it.item.titulo.toLowerCase().includes(search.toLowerCase()))
    setLista(newLista)
    console.log(search)
    getItemsByTitle(search)
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  useEffect(()=>{


  },[lista])

  
    return (
      
        <div>


 
  {/* navbar */}
  {cartFunctions().setT("navbar page")}



  {/* products */}
  <section className="products">
    {/* filters */}
    <div className="filters">
      <div className="filters-container">
        {/* search */}
        <div className="input-form">
          <input type="text" className="search-input" onKeyDown={searchItem} placeholder="pesquisar..." />
        </div>
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
        <div className="price-form">
          <input 
            type="range"
            className="price-filter"
            min={0}
            defaultValue={50}
            max={100}
            onChange={handleChange} 
             />
        </div>
        <span className="price-value">Valor : R$300</span>
      </div>
    </div>
    {/* products */}
    <div className="products-container">
      {/* single product */}
            


      {lista>0?  lista.map(it => <Item key={it.id} arr={it} cartFunctions={cartFunctions}/> ) : todos.map(it => <Item key={it.id} arr={it} cartFunctions={cartFunctions}/>)}


      {/* end of single product */}
     
    </div>
  </section>


            </div>)
}


export default Produtos

