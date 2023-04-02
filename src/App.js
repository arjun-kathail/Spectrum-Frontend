import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import Landing from './Landing';
import Team from './Team';
import NavBar from './Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GoogleOAuthProvider } from '@react-oauth/google';

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Ubuntu',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    // eslint-disable-next-line no-undef
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/team" element={<Team />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </ThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}

export default App;
