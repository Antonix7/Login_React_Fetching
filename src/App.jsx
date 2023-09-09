import './App.css';

export function App() {
  return(
    <>
      <div className="login-card">
        <form>
          <h1>Login</h1>
          <input placeholder="usuario"/><br/>
          <input placeholder="contraseña"/><br/>
          <button type="submit">Acceder</button>
        </form>
      </div>
    </>
  )
}
