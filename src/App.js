import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Plants from './Pages/Plants';
import PlantCategory from './Pages/PlantCategory'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer';
import banner from './Components/Assets/banner2.jpg'
// import women_banner from './Components/Assets/banner_women.png'
// import kids_banner from './Components/Assets/banner_kids.png'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Plants />} />
        <Route path='/seeds' element={<PlantCategory banner={banner} category="seeds"/>} />
        <Route path='/pots&planters' element={<PlantCategory banner={banner} category="pots&planters"/>} />
        <Route path='/plantcare' element={<PlantCategory banner={banner} category="plantcare"/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/login' element={<LoginSignup />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
