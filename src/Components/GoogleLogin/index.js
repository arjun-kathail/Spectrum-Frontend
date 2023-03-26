/* eslint-disable */
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Button } from '@mui/material';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleLogo from '../../assets/logos/google_icon.png';

const GoogleLoginButton = forwardRef((props, ref) => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  useImperativeHandle(ref, () => ({
    logOut() {
      googleLogout();
      setProfile(null);
      localStorage.removeItem('userObject');
      props.handleUserLogout();
    },
  }));

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem('userObject', JSON.stringify(res.data));
          props.handleUserLogin();
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div>
      {profile && props.user ? null : (
        <Button
          variant='contained'
          sx={{
            color: '#fff',
            background: '#A420D0',
            '&:hover': { background: '#A420D0' },
            fontSize: '1rem',
          }}
          onClick={() => login()}
        >
          <img src={GoogleLogo} alt='Google Logo' style={{ height: '1rem' }} />
          &nbsp; Login
        </Button>
      )}
    </div>
  );
});
export default GoogleLoginButton;
