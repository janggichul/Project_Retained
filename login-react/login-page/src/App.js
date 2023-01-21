/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Home from './components/Home';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({})

  const accessToken = () => {
    axios({
      url: "http://localhost:8123/accesstoken",
      method : "GET",
      withCredentials: true
    })
  }
  const refreshToken = () => {
    axios({
      url: "http://localhost:8123/refreshtoken",
      method : "GET",
      withCredentials: true
    })
  }

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

  useEffect(() => {
    try {
      axios({
        url: "http://localhost:8123/login/success",
        method: "GET",
        withCredentials: true,
      })
        .then((result) => {
          console.log('resuult' ,result)
          if (result.data) {
            setIsLogin(true);
            setUser(result.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a onClick={accessToken} className="App-link">
          get Access Token
        </a>
        <a onClick={refreshToken} className="App-link">
          get Refresh Token
        </a>
        {isLogin ? (
          <>
    <h3>{user.username} 님이 로그인했습니다.</h3>
    <button onClick={logout} className="loginButton">
      Logout
    </button>
          </>
        ) : (
          <Login setUser={setUser} setIsLogin={setIsLogin} />
        )}
      </header>
    </div>
  );
}

export default App;
