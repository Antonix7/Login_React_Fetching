import './App.css';
import { useState  } from 'react'
import { users } from './components/users';

export function App() {
  const [userName, setUseName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);

  const searchUser = () => {
    fetch('/connect/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Usuario no encontrado');
        }
        return response.json();
      })
      .then(data => {
        setUsuarioEncontrado(data);
      })
      .catch(error => {
        console.error('Error:', error);
        setUsuarioEncontrado(null);
      });
  };

  return(
    <>
      <div className="login-card">
        <form>
          <h1>Login</h1>
          <input 
            type="text" 
            placeholder="nombre de usuario"
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
            onClick={() => searchUser}
          >Acceder</button>
        </form>
      </div>
    </>
  )
}
