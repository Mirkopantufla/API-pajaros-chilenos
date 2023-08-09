import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Birds from './pages/Birds';
import Navbar from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle'; // JS
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import About from './pages/About';
import injectContext from './context/AppContext';
import BirdInformation from './pages/BirdInformation';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/birds' element={<Birds />} />
          <Route path='/about' element={<About />} />
          <Route path='/birds/:uid' element={<BirdInformation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);