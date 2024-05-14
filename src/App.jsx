import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainMenu from './login/MainMenu';
import { MusicBar, Header, RouterComponent, LoginViewRouting } from './components'

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [playerState, setPlayerState] = useState({
    playing: false,
    duration: 0,
    durationFormat: '0:00',
    time: 0,
    timeFormat: '0:00',
  });
  const [activeSong, setActiveSong] = useState(
    {
      song: "Happier",
      songid: "happier-000",
      author: "Marshmello",
      authorid: "marshmello-000",
      src: "/src/assets/imgs/album.jpeg",
      url: "https://www.youtube.com/watch?v=m7Bc3pLyij0"
    },
  );
  const [canciones, setCanciones] = useState(
    [
      {
        song: "Happier",
        songid: "happier-000",
        author: "Marshmello",
        authorid: "marshmello-000",
        src: "/src/assets/imgs/album.jpeg",
        url: "https://www.youtube.com/watch?v=m7Bc3pLyij0"
      },
      {
        song: "Human",
        songid: "human-000",
        author: "Rag'n'Bone Man",
        authorid: "rag-n-bone-man-000",
        src: "/src/assets/imgs/aquellanoche.jpeg",
        url: "https://www.youtube.com/watch?v=L3wKzyIN1yk"
      },
      {
        song: "Piel Canela",
        songid: "piel-canela-000",
        author: "Carlos Vives",
        authorid: "carlos-vives-000",
        src: "/src/assets/imgs/pielcanela.jpeg",
        url: "https://www.youtube.com/watch?v=42Ph2v0NE7Y"
      },
      {
        song: "Te Pintaron Pajaritos",
        songid: "te-pintaron-000",
        author: "Yandar & Yostin",
        authorid: "yandar-yostin-000",
        url: "https://www.youtube.com/watch?v=3Kr4OHIhWis"
      },
      {
        song: "Una Vaina Loca",
        songid: "una-vaina-loca-000",
        author: "Fuego",
        authorid: "fuego-000",
        url: "https://www.youtube.com/watch?v=UdztftsoybQ"
      }
    ])
  return (
    <Router>
      {
        loggedIn ?
          <div className='w-svw h-svh flex flex-col' >
            <Header setLoggedIn={setLoggedIn} />
            <div className='flex flex-row grow'>
              <RouterComponent setPlayerState={setPlayerState} playerState={playerState} canciones={canciones} setActiveSong={setActiveSong} activeSong={activeSong} />
            </div>
            <MusicBar setPlayerState={setPlayerState} playerState={playerState} activeSong={activeSong} setActiveSong={setActiveSong} />
          </div>
          : <MainMenu></MainMenu>
      }
    </Router>);

}

export default App;