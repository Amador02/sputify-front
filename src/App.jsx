import {  useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainMenu  from './login/MainMenu';
import { MusicBar, Header, RouterComponent, LoginViewRouting } from './components'

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=Lg_Pn45gyMs");
  return (
    <Router>
      {
        loggedIn ?
          <div className='w-svw h-svh flex flex-col' >
            <Header setLoggedIn={setLoggedIn} />
            <div className='flex flex-row grow'>
              <RouterComponent setVideoUrl={setVideoUrl} />
            </div>
            <MusicBar videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
          </div>
          // : <MainMenu setLoggedIn={setLoggedIn} />
          : <MainMenu></MainMenu>
      }
    </Router>);

}

export default App;