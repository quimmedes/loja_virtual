import { useGlobalContext } from './Context';


const Sobre = ()=>{
  const {cartFunctions} = useGlobalContext()

    return (
        <div>

  {/* main css */}
  <link rel="stylesheet" href="./css/styles.css" />
  {/* navbar */}
  
  {cartFunctions().setT("navbar page")}



  {/* about */}
  <section className="section section-center">
    <div className="title">
      <span />
      <h2>Lorem ipsum</h2>
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
  

        </div> )
    }

    export default Sobre