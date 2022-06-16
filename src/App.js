import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/pages/listVievPage/ProductList';
import ProductViewPage from './components/pages/productVievPage/ProductViewPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/product/:id' element={<ProductViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
