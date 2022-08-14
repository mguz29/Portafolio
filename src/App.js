import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ColorSchemesExample from './Components/ColorSchemesExample';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/Home' element ={<Home/>}/>
        <Route path='/' element ={<Home/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
