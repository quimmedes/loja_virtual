import './App.css';
import Home from './Home';
import './css/styles.css'
import './css/normalize.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Produtos from './Produtos';
import Produto from './Produto';
import Sobre from './Sobre'
import Nav from './Nav'
import AddUser from './Forms/AddUser';
import AddProduct from './Forms/AddProduct';



function App() {

  return (
    <div>
    <Nav />

         
    <Router>

        <Routes>
        <Route path="/" element={<Home />} />
  
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produto/:produtoId" element={<Produto />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/admin/adduser" element={<AddUser />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />


    
        </Routes>
    
      </Router>
      </div>
  );
}

export default App;
