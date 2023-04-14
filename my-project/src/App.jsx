import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import './App.css'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}> 
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
