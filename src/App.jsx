import './App.css';

export function App() {
  const [userName, setUseName] = userState("");
  const [userPassword, setUserPassword] = userState("");

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
          <button type="submit">Acceder</button>
        </form>
      </div>
    </>
  )
}
