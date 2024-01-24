
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
