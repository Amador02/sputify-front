import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AdminView from './user/AdminView';
import UsuarioView from './user/UsuarioView';
import { MusicBar, Header, RouterComponent, LoginViewRouting, RouterAdmin } from './components'

function App() {
  const [loggedIn, setLoggedIn] = useState('usuario');
  return (
    <Router>
      {
        (loggedIn && loggedIn !== "admin") &&
        (<UsuarioView setLoggedIn={setLoggedIn} />)
      }
      {
        loggedIn === "admin" &&
        (<AdminView setLoggedIn={setLoggedIn} />)
      }
      {
        !loggedIn &&
        (
          <div className='w-svw h-svh flex flex-col' >
            <LoginViewRouting setLoggedIn={setLoggedIn} />
          </div>
        )
      }
    </Router>);

}

export default App;