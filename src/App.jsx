import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MusicBar, LeftBar, Header, RouterComponent } from './components'

function App() {
  return (
    <Router>
      <div className='w-svw h-svh flex flex-col' >
        <Header />
        <div className='flex flex-row grow'>
          <RouterComponent />
        </div>
        <MusicBar />
      </div>

    </Router>
  );

}

export default App;

