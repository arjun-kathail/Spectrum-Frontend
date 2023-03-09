import React from 'react';
// import styles from './App.module.css';
import Landing from './Landing';
import NavBar from './Components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <NavBar />
    <Landing />
  </ThemeProvider>;
}

export default App;
