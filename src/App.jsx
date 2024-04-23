import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MusicBar, Header, RouterComponent, LoginView } from './components'

function App() {
  let loggedIn = false;
  return (
    <Router>
      {
        loggedIn ?
          <div className='w-svw h-svh flex flex-col' >
            <Header />
            <div className='flex flex-row grow'>
              <RouterComponent />
            </div>
            <MusicBar />
          </div>
          : <LoginView />
      }
    </Router>);

}

export default App;