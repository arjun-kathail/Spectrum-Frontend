/* eslint-disable */
import React, { useEffect, useContext, forwardRef, useImperativeHandle } from 'react';
import { toast } from 'react-toastify';
import userContext from '../../Context/userContext';
import { Button } from '@mui/material';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleLogo from '../../assets/logos/google_icon.png';
import 'react-toastify/dist/ReactToastify.css';

const GoogleLoginButton = forwardRef((props, ref) => {
  const [user, setUser] = useContext(userContext);

  useImperativeHandle(ref, () => ({
    logOut() {
      googleLogout();
      localStorage.removeItem('spectrumUser');
      setUser(undefined);
    },
  }));

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user?.access_token) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          axios
            .post(
              `${process.env.REACT_APP_BACKEND_API}user/login/`,
              {
                email: res.data.email,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              },
            )
            .then((backendRes) => {
              localStorage.setItem(
                'spectrumUser',
                JSON.stringify({ ...res.data, ...backendRes.data }),
              );
              setUser({ ...res.data, ...backendRes.data });
              toast('Log in successful');
              console.log({ ...res.data, ...backendRes.data });
            })
            .catch((err) => {
              console.log(err);
              toast('Login attempt failed');
              setUser(undefined);
            });
        })
        .catch((err) => {
          toast('Login attempt failed');
          setUser(undefined);
        });
    }
  }, [user]);

  return (
    <div>
      {user ? null : (
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
