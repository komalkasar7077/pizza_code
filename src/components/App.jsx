import React from 'react';
import Home from './Home ';
import NavScrollExample from './Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Pages/Login';
import contact from '../Pages/contact';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';



const App = () => {
    return (
        <div className="App">
        <BrowserRouter>
  
          <NavScrollExample/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<contact/>} />
            <Route path='/Login' element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>

        
    

    );
}

export default App;
