import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { CartProvider } from './components/Context';
import Order from './pages/Order';
import Histroy from './pages/Histroy';
import { useAuthContext } from './main';




function App() {

  const {authToken} = useAuthContext();
  return (
    <CartProvider>
    <BrowserRouter>
      <div>
        <Routes>
         {  <Route path='/' element={authToken ? <Home /> : <Login/>} /> }
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/order/history' element={<Histroy/>} />
        </Routes>
      <ToastContainer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
