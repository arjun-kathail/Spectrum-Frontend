import React, { useState } from 'react';
// import styles from './App.module.css';
import Landing from './Landing';
import NavBar from './Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import userContext from './Context/userContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [user, setUser] = useState(null);

  const handleUserLogin = () => {
    const serializedState = localStorage.getItem('userObject');
    setUser(serializedState);
  };
  
  const handleUserLogout = () => {
    setUser(null);
  }

  return (
    <GoogleOAuthProvider clientId='794358287288-hdchp559q23p7piav6qlnj1dsml2pvnn.apps.googleusercontent.com'>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <NavBar user={user} handleUserLogin={handleUserLogin} handleUserLogout={handleUserLogout} />
          <Landing />
        </ThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
