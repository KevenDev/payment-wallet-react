import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import './App.css'
import Wallet from './Components/Wallet'
import Payment from './Components/Payment'
import Confirmation from './Components/Confirmation'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}> 
         <Route index element={<Wallet/>}></Route>
         <Route path='/payment' element={<Payment/>}> </Route> 
         <Route path='/confirmPayment' element={<Confirmation/>}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
