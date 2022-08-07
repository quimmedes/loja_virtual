import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

const Profile = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0()

    console.log(process.env.REACT_APP_ADMIN)
    console.log(isAuthenticated)

    useEffect(() => {
   


        if (!isAuthenticated ) {
          loginWithRedirect({ redirect_uri: "http://localhost:3000/admin" })
        }
      
       if( isAuthenticated && user.email != process.env.REACT_APP_ADMIN) {

      //  window.location.href = "/"


    }
    }, [isLoading])
 

  
    if (isLoading) {
      return <div>Carregando ...</div>
    }


  
    return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt="" />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )
    )
  }

const Admin = ()=>{

   
    return(
        <div className="flex justify-center" >
            <div className="text-orange-500">
            <h1>Admin</h1>
            <div><Profile /></div>
            <ul>
                <li>
                    <Link to="/admin/adduser"  className=" hover:text-rose-900">Adicionar Usuário</Link>
                </li>
                <li>
                    <Link to="/admin/addproduct" className=" hover:text-rose-900">Adicionar Produto</Link>
                </li>
                <li>
                    <Link to="/endereco" className=" hover:text-rose-900">Endereco</Link>
                </li>
                <li>
                    <Link to="/pagamento" className=" hover:text-rose-900">Pagamento</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}   
export default Admin