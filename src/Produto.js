import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import getItemById from "./Functions/getItemById";
import { useGlobalContext } from './Context';



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


const Produto = ()=>{

  const [produto, setProduto] = useState()
  const {produtoId} = useParams()
  const {cartFunctions} = useGlobalContext()


  async function getItem(){
      const p = await getItemById(produtoId)
      console.log(p)
      setProduto(p)
  }

  useEffect(()=>{ 
   if(produto === undefined)
    getItem()

  },[produtoId])

function Item (){

  return (

  <section className="single-product section">
  <div className="section-center single-product-center">
    <img
      src={produto.item.imagem}
      className="single-product-img img"
      alt=""
    />
    <article className="single-product-info">
      <div>
        <h2 className="single-product-title">{produto.item.titulo}</h2>
        <p className="single-product-company text-slanted">{produto.item.marca}</p>
        <span className="single-product-price">R${produto.item.preco}</span>
        <div className="single-product-colors">
          <span className="product-color" />
          <span className="product-color product-color-red" />
        </div>
        <p className="single-product-desc">
         {produto.item.text}
        </p>
        <button className='btn' onClick={()=>cartFunctions().addCart(produto)}  >
          adicionar para o carrinho
        </button>


      </div>
    </article>
  </div>
  </section>
  
     )

}

  return (

    <div>
        {cartFunctions().setT("navbar page")}

      {produto && Item()}


    </div>

)
  


  

 


  
  }

    export default Produto