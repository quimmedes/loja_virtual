import { useGlobalContext } from "./Context";
import Item from "./Item";


const Home = ()=>{
  const {todos, cartFunctions} = useGlobalContext()

return (
    <div>

    {cartFunctions().setT("navbar")}
 
  {/* hero */}
  <section className="hero">
    <div className="hero-container">
      <h1 className="text-slanted">Descançar, Relaxar, Livre</h1>
      <h3 className="text-slanted">Abrace suas escolhas - Do seu jeitinho</h3>
      <a href="./produtos" className="btn hero-btn text-slanted">
        Compre agora
      </a>
    </div>
  </section>
  {/* featured products */}
  <section className="section featured">
    <div className="title">
      <span />
      <h2>Destaques</h2>
      <span />
    </div>
    <div className="section-center featured-center">
    

    {todos && todos.slice(0,3).map(it => <Item key={it.id} arr={it} cartFunctions={cartFunctions} />)}  


      {/* end of single product */}
    </div>
    <a href="produtos" className="btn">
      {" "}
      Nossos produtos{" "}
    </a>
  </section>


    </div>
)


}


export default Home;