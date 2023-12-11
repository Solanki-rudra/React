import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import WelcomePage from './components/WelcomePage';
import { AppContainer } from './components/StyledComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react'

function App() {
  const [mobile, setMobile] = useState();
  return (
    <AppContainer>
       <ToastContainer autoClose={1000} />
      <Routes>
        <Route  path='/' element={<WelcomePage setMobile={setMobile} mobile={mobile}/>} />
        <Route path='/register' element={<Register mobile={mobile}/>} />
      </Routes>
    </AppContainer>
  );
}

export default App;
