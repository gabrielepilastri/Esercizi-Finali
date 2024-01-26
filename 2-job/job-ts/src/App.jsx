

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import MyNavbar from './components/MyNavbar';
import Favourites from './components/Favourites';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <>
       <div className="main">
        
       <BrowserRouter>
         <MyNavbar/>
          <Routes>
            <Route path="/" element={<Home/>} />   {/** */}
            <Route path="/favourites" element={<Favourites/>} />
          </Routes>
        </BrowserRouter>           
       </div>
    </>
  )
}

export default App
