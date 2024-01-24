
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={</>} />
            
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
