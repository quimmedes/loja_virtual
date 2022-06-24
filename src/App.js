import './App.css';
import Home from './Home';
import './css/styles.css'
import './css/normalize.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Produtos from './Produtos';
import Produto from './Produto';
import Sobre from './Sobre'
import Nav from './Nav'



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
    
        </Routes>
    
      </Router>
      </div>
  );
}

export default App;
