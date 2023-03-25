import React, { useState } from 'react';
// import styles from './App.module.css';
import Landing from './Landing';
import NavBar from './Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import userContext from './Context/userContext';

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Ubuntu',
  },
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userObject')));

  const handleUserLogin = () => {
    const serializedState = localStorage.getItem('userObject');
    setUser(JSON.parse(serializedState));
  };

  const handleUserLogout = () => {
    setUser(null);
  };

  return (
    <GoogleOAuthProvider clientId='794358287288-hdchp559q23p7piav6qlnj1dsml2pvnn.apps.googleusercontent.com'>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <NavBar
            user={user}
            handleUserLogin={handleUserLogin}
            handleUserLogout={handleUserLogout}
          />
          <Landing user={user} />
        </ThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
