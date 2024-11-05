import { Route, Routes } from "react-router-dom";
import BrandsContainer from './BrandsContainer';
import ItemListContainer from "./ItemListContainer";
import BrandsDisplay from "./BrandsDisplay";
import BrandDisplay from './BrandDisplay'
import Carousel from './Carousel'
import ItemDetailContainer from "./ItemDetailContainer";
import Register from "./Register";
import Login from "./Login";


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<><BrandDisplay /><Carousel /><BrandsDisplay /></>} />
        <Route path="/brand/:categoryId" element={<BrandsContainer />} />
        <Route path="/products/all" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </main>
  );
}

export default Main;
