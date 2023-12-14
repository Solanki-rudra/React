import React, { useEffect, useState } from 'react';
import { Div, FormWraper } from '../styles/Styled_component';
import StartPage from '../components/StartPage';
import LoginSecPage from '../components/LoginSecPage';
import VALUES from '../constants/constants';
import { useNavigate } from 'react-router';

function Login({setMobile, mobile}) {
  const navigate = useNavigate();
  const [dialNumber, setDialNumber] = useState(mobile);
  const [isLogin, setIsLogin] = useState(mobile===VALUES.number);

  useEffect(() => {
    // console.log('d===>'+dialNumber)
    if (!dialNumber) {
      setIsLogin(false);
    } else if (dialNumber !== VALUES.number) {
      setMobile(dialNumber)
      navigate('/register');
    } else {
      setIsLogin(true);
    }
    if(VALUES.number===mobile) setMobile('')
  }, [dialNumber, navigate]);

  return (
    <FormWraper>
      {!isLogin ? (
        <StartPage title='Welcome' number={(num) => setDialNumber(num)} />
      ) : (
        <LoginSecPage number={dialNumber} setIsLogin={setIsLogin}/>
      )}
    </FormWraper>
  );
}

export default Login;