
import Item from "./Item"
import Nav from "./Nav"
import { useState, useEffect } from 'react';
import  {db}  from './Db';

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';



const Produtos = ()=>{

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
       Load()
    }, [input])


  async function Load(){

    const snapshot = await query(collection(getFirestore(), 'lojanova'), orderBy('timestamp'), limit(12)).get()

    setTodos(snapshot.docs.map(d=>({id: d.id,item :d.data()})))
   
 //     var array = []
    // Start listening to the query.
 //    onSnapshot(recentMessagesQuery, function(snapshot) {
 //     snapshot.docChanges().map(change=> {
 //         array.push({id: change.doc.id, item :change.doc.data()})
 //         setTodos(array)
        
 //     })
 //   })

    

    //const snapshot = await getDocs(collection(db,'lojanova'))
    //setTodos(snapshot.docs.map(d=>({id: d.id,item :d.data()})))
    //console.log(todos)
  }


    return (
        <div>

          {/* font awesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
  />
 
  {/* navbar */}
        <Nav navbar="navbar page"/>
  {/* end of navbar*/}
  {/* page hero */}
  <section className="page-hero">
    <div className="section-center">
      <h3 className="page-hero-title">Home / Products</h3>
    </div>
  </section>
  {/* products */}
  <section className="products">
    {/* filters */}
    <div className="filters">
      <div className="filters-container">
        {/* search */}
        <form className="input-form">
          <input type="text" className="search-input" placeholder="search..." />
        </form>
        {/* categories */}
        <h5>Company</h5>
        <article className="companies">
          <button className="company-btn">all</button>
          <button className="company-btn">ikea</button>
          <button className="company-btn">marcos</button>
        </article>
        {/* price */}
        <h5>Price</h5>
        <form className="price-form">
          <input
            type="range"
            className="price-filter"
            min={0}
            defaultValue={50}
            max={100}
          />
        </form>
        <span className="price-value">Value : $80</span>
      </div>
    </div>
    {/* products */}
    <div className="products-container">
      {/* single product */}
      
      

      {todos.map(it => <Item key={it.id} arr={it} />)}

  


      {/* end of single product */}
     
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



            </div>)
}


export default Produtos

