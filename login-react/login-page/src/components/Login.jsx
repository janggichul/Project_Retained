import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styles from './Login.module.css'

export default function Login({setIsLogin, setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios.get({
          url: "http://localhost:8123/login",
          method: "POST",
          withCredentials: true,
          data: {
            email: email,
            password: password,
          },
        }).then((result) => {
          if (result.status === 200) {
            window.open('/', '_self')
          }
        });
      };
    
  return (
    <div >
        <div className={styles.loginContaner}>
            <div className={styles.inputGroup}>
            <label htmlFor="" className={styles.inputLabel}>email</label>
            <input type="email" className={styles.inputValue} placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="" className={styles.inputLabel}>password</label>
            <input type="password" className={styles.inputValue} placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={login} className={styles.loginButton}>loginButton</button>
        </div>
    </div>
  )
}
