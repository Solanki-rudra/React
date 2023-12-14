import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './files/Register'
import { AppContainer } from './styles/Styled_component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createContext, useEffect, useState} from 'react'
import Login from './files/Login';
import RoleManagement from './files/RoleManagement';
import UserRolesList from './files/UserRolesList';

const userRoleContext = createContext()

function App() {
  const [mobile, setMobile] = useState();
  const [userRoleData, setUserRoleData] = useState([
    {
      id:1,
      role:'Pharmacist',
      status:'de-active',
      orders:{View:true,Add:true,Edit:true,Update:true,Delete:true},
      invite_code:{View:true,Add:true},
      medicine_master:{View:true,Add:true,Edit:true,Update:true,Delete:true},
      coupon:{View:true,Add:true,Edit:true,Update:true,Delete:true},
    },
    {
      id:2,
      role:'Packer',
      status:'active',
      orders:{View:true,Add:false,Edit:true,Update:true,Delete:true},
      invite_code:{View:true,Add:true},
      medicine_master:{View:true,Add:true,Edit:true,Update:true,Delete:true},
      coupon:{View:true,Add:true,Edit:true,Update:true,Delete:true},
    },
    {
      id:3,
      role:'Admin',
      status:'active',
      orders:{View:true,Add:false,Edit:true,Update:true,Delete:true},
      invite_code:{View:false,Add:true},
      medicine_master:{View:true,Add:true,Edit:true,Update:true,Delete:true},
      coupon:{View:true,Add:true,Edit:true,Update:true,Delete:true},
    },
  ]);
  return (
    <AppContainer>
      <userRoleContext.Provider value={{userRoleData,setUserRoleData}}>
       <ToastContainer autoClose={1000} />
      <Routes>
        <Route  index element={<Login setMobile={setMobile} mobile={mobile}/>} />
        <Route  path='/login' element={<Login setMobile={setMobile} mobile={mobile}/>} />
        <Route  path='/register' element={<Register setMobile={setMobile} mobile={mobile}/>} />
        <Route  path='/role-management' element={<RoleManagement />} />
        <Route  path='/role-management/:id' element={<RoleManagement />} />
        <Route  path='/user-roles' element={<UserRolesList />} />
      </Routes>
      </userRoleContext.Provider>
    </AppContainer>
  );
}

export default App;
export {userRoleContext}