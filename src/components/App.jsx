import '../App.css';
import Navbar from './Navbar';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
// import Carousel from './Carousel';
// import BrandDisplay from './BrandDisplay';
// import BrandsDisplay from './BrandsDisplay';
import { BrowserRouter } from "react-router-dom";
import Main from './Main';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
