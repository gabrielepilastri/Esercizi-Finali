

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import MyNavbar from './components/MyNavbar';
import Favourites from './components/Favourites';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
       
        <BrowserRouter>
         <MyNavbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/favourites" element={<Favourites/>} />
          </Routes>
        </BrowserRouter>           
    </>
  )
}

export default App
