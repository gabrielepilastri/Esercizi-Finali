

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import MyNavbar from './components/MyNavbar';

function App() {

  return (
    <>
      <MyNavbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
