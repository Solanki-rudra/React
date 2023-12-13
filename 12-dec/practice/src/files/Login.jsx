import React, { useEffect, useState } from 'react';
import { Div, FormWraper } from '../styles/Styled_component';
import StartPage from '../components/StartPage';
import LoginSecPage from '../components/LoginSecPage';
import VALUES from '../constants/constants';
import { useNavigate } from 'react-router';

function Login({setMobile}) {
  const navigate = useNavigate();
  const [dialNumber, setDialNumber] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!dialNumber) {
      setIsLogin(false);
    } else if (dialNumber !== VALUES.number) {
      setMobile(dialNumber)
      navigate('/register');
    } else {
      setIsLogin(true);
    }
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