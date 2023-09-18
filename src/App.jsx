import './App.css';
import { useState  } from 'react'
import { users } from './components/users';

export function App() {
  const [userName, setUseName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function userExist() {
    const exists = users.some(
      user => user.userName === userName && user.userPassword === userPassword
    );

    if (exists) {
      alert("Usuario existe");
    } else {
      alert("Usuario no existe");
    }
  }

  return(
    <>
      <div className="login-card">
        <form>
          <h1>Login</h1>
          <input 
            type="text" 
            placeholder="usuario"
            value={userName} 
            onChange={e => setUseName(e.target.value)}
            required
          /><br/>
          <input 
            type="password" 
            placeholder="contraseña"
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
            required/><br/>
          <button 
            type="button" 
            onClick={() => userExist(userName, userPassword)}
          >Acceder</button>
        </form>
      </div>
    </>
  )
}
