import React, { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MusicBar, Header, RouterComponent, LoginViewRouting } from './components'

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      {
        loggedIn ?
          <div className='w-svw h-svh flex flex-col' >
            <Header setLoggedIn={setLoggedIn} />
            <div className='flex flex-row grow'>
              <RouterComponent />
            </div>
            <MusicBar />
          </div>
          : <LoginViewRouting setLoggedIn={setLoggedIn} />
      }
    </Router>);

}

export default App;