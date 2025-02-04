import { BrowserRouter,Routes, Route } from "react-router-dom"
import Product from './pages/Product.jsx'
import Pricing from './pages/Pricing.jsx'
import Homepage from './pages/Homepage.jsx'
import PageNotFound from "./pages/PageNotFound.jsx"
import AppLayout from "./pages/AppLayout.module.css"
import Login from "./pages/Login.jsx"
import CityList from "./components/CityList.jsx"

function App() {
  return (
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="product" element= {<Product/>}/>
    <Route path='price' element={<Pricing/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path= 'app' element={<AppLayout/>}>
      <Route index element={<CityList/>}/>
      <Route path='cities' element={<CityList/>}/> 
      <Route path='countries' element={<p>Countries</p>}/>
      <Route path='form' element={<p>Form</p>}/>
      </Route>
    <Route path= '*' element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>

  );
  
}

export default App



