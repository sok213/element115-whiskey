import s from './App.module.scss';
import './global.scss';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import Story from './Components/Pages/Story/Story';
import Process from './Components/Pages/Process/Process';
import Headquarters from './Components/Pages/Headquarters/Headquarters';
import Contact from './Components/Pages/Contact/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className={`${s.App} animate__animated animate__fadeIn`}>
          <NavigationBar />
          <div className={s.appcontentContainer}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/story" element={<Story />} />
              <Route path="/process" element={<Process />} />
              <Route path="/headquarters" element={<Headquarters />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
