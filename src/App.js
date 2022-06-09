// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
