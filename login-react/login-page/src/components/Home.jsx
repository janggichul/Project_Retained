import axios from 'axios';
import React from 'react'

export default function Home(user) {

    const logout = () => {
        axios({
          url: "http://localhost:8123/logout",
          method: "POST",
          withCredentials: true,
        }).then((result) => {
          if (result.status === 200) {
            window.open("/", "_self");
          }
        });
      };
    
  return (
    <>
    <h3>{user.username} 님이 로그인했습니다.</h3>
    <button onClick={logout} className="loginButton">
      Logout
    </button>
    </>
  )
}
