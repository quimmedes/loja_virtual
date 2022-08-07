import  { useState, useContext, useEffect, createContext} from 'react'
import { useCallback } from 'react'
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

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [todos, setTodos] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false)
  const [thema, setThema] = useState('navbar')


  const fetchTodos = useCallback( async () => {
    setLoading(true)
    try {
            
      const snapshot = query(collection(getFirestore(), 'lojanova'), orderBy('timestamp'))
        onSnapshot(snapshot, function(snapshot) {
         setTodos(snapshot.docChanges().map(change=> 
             ({id: change.doc.id, qt:0, item :change.doc.data()})
           
         ))
       })

       setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])

  useEffect(() => {

    fetchTodos()

    let nowDate = new Date();
       let expiryDate = new Date(new Date().setHours(new Date().getHours() + 12));
       //let expiryDate2 = new Date(new Date().setMinutes(new Date().getMinutes() + 5));
 
       if(localStorage.getItem("time") !==null) {
         if(new Date(localStorage.getItem("time")) < nowDate ) 
         {  
         localStorage.clear()
         localStorage.setItem("time", expiryDate.toUTCString());
         //console.log("foi")
         //console.log(new Date(localStorage.getItem("time")));
       }
      }
     else
     {
       localStorage.setItem("time", expiryDate.toUTCString());
     }

     localStorage.getItem("cart") && localStorage.getItem("cart").length > 0 ? setCart(JSON.parse(localStorage.getItem("cart"))) : setCart([])


  }, [searchTerm,fetchTodos, todos])


  const cartFunctions = ()=>{

    const setT = (t)=>{ setThema(t) } 

    const removeCart = (i)=>{
      const newCart = cart.filter(c=>c.id!==i.id)
      setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const addCart = (i)=>{
    let newCart
    if(cart && cart.filter(it => it.id === i.id).length > 0) {
      newCart = cart.map(it => it.id === i.id ? {id: it.id, qt: it.qt+1, item: it.item} : it)
    setCart(cart.map(it => it.id === i.id ? {id: it.id, qt: it.qt+1, item: it.item} : it)) 
    localStorage.setItem("cart", JSON.stringify(newCart))
  }
  else{
    newCart = [...cart, {id: i.id, qt: 1, item: i.item}]
     setCart(newCart)
     localStorage.setItem("cart", JSON.stringify(newCart))
  }

  }

  const increaseCart = (i)=>{
    const newCart = cart.map(it => it.id === i.id ? {id: it.id, qt: it.qt+1, item: it.item} : it)
      setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart))
    
  }

   const decreaseCart = (i)=>{
    if(i.qt>1){
      const newCart = cart.map(it => it.id === i.id ? {id: it.id, qt: it.qt-1, item: it.item} : it)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    }
  }

  return {removeCart,addCart,increaseCart,decreaseCart,setT}

   }

  

  return (
    <AppContext.Provider  value={{ loading, todos, cart, thema, cartFunctions, searchTerm, setSearchTerm }} >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
