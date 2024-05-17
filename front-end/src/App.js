
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { DarkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { CustomerRoute } from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';


function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(state=>state)
  useEffect(() => {
      dispatch(getUser(jwt || auth.jwt))
      dispatch(findCart(jwt))
  }, [auth.jwt]);




  return (
    <ThemeProvider theme={DarkTheme}>
        <CssBaseline />

        <CustomerRoute/>
    </ThemeProvider>


  );
}

export default App;
