import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './files/Register'
import { AppContainer } from './styles/Styled_component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from 'react'
import Login from './files/Login';

function App() {
  const [mobile, setMobile] = useState();
  return (
    <AppContainer>
       <ToastContainer autoClose={1000} />
      <Routes>
        <Route  index element={<Login setMobile={setMobile} mobile={mobile}/>} />
        <Route  path='/login' element={<Login setMobile={setMobile} mobile={mobile}/>} />
        <Route  path='/register' element={<Register mobile={mobile}/>} />
      </Routes>
    </AppContainer>
  );
}

export default App;