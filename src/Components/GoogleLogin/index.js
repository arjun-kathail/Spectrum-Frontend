import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleLogo from '../../assets/logos/google_icon.png';

const GoogleLoginButton = () => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        localStorage.setItem("userObject", JSON.stringify(res.data));
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.removeItem("userObject");
    };

    return (
        <div>
            {profile ? (
                <button style={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={() => logOut()}>
                    <img src={GoogleLogo} style={{ width: "30px", height: "30px" }} alt="image not found"></img>
                    &nbsp;Logout
                </button>
            ) : (
                <button style={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={() => login()}>
                    <img src={GoogleLogo} style={{ width: "30px", height: "30px" }} alt="image not found"></img>
                    &nbsp;Login
                </button>
            )}
        </div>
    );
}
export default GoogleLoginButton;
