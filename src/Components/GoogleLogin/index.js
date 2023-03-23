/* eslint-disable */
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
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

  const handleLogOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('userObject');
    props.handleUserLogout();
  };

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
      {profile ? (
        <button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleLogOut()}
        >
          <img
            src={GoogleLogo}
            style={{ width: '30px', height: '30px' }}
            alt='image not found'
          ></img>
          &nbsp;Logout
        </button>
      ) : (
        <button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => login()}
        >
          <img
            src={GoogleLogo}
            style={{ width: '30px', height: '30px' }}
            alt='image not found'
          ></img>
          &nbsp;Login
        </button>
      )}
    </div>
  );
});
export default GoogleLoginButton;
