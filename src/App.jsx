import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MusicBar, Header, RouterComponent, LoginViewRouting, RouterAdmin } from './components'

function App() {
  const [loggedIn, setLoggedIn] = useState("usuario");
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
      },
      {
        song: "Normal",
        songid: "normal-000",
        author: "Ferxxo",
        authorid: "fuego-000",
        url: "https://www.youtube.com/watch?v=oD5f55ohsc4",
        src: "/src/assets/imgs/felizcumple.webp"
      },
      {
        song: "Enamorado Tuyo",
        songid: "enamorado-tuyo-000",
        author: "Cuarteto de Nos",
        authorid: "cuarteto-de-nos-000",
        url: "https://www.youtube.com/watch?v=R5cbxTPZNL0",
        src: "/src/assets/imgs/enamoradotuyo.jpeg"
      }, {
        song: "SUPERMODEL",
        songid: "supermodel-000",
        author: "Måneskin",
        authorid: "ma-neskin-000",
        url: "https://www.youtube.com/watch?v=jODrVofka54",
      }, {
        song: "Muy Feliz (Remix)",
        songid: "muy-feliz-000",
        author: "Ñejo",
        authorid: "nejo-000",
        url: "https://www.youtube.com/watch?v=Bsr1qL3sv9w",
        src: "/src/assets/imgs/muyfeliz.jpeg"
      }, {
        song: "Agarrala Pegala Azotala",
        songid: "agarrala-pegala-000",
        author: "Trebol Clan",
        authorid: "trebol-clan-000",
        url: "https://www.youtube.com/watch?v=VnQ1mLNHJC0",
        src: "/src/assets/imgs/agarrala.png"
      }, {
        song: "1 Thing",
        songid: "1-thing-000",
        author: "Amerie",
        authorid: "amerie-000",
        url: "https://www.youtube.com/watch?v=bbqVg_23otg",
        src: "/src/assets/imgs/1thing.png"
      }
    ])
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  useEffect(() => {
    const modalElement = document.getElementById('modal')
    if (modalElement) {
      modalElement.style.pointerEvents = modal ? 'auto' : 'none';
      modalElement.style.opacity = modal ? '1' : '0';
    }
  }, [modal])
  return (
    <Router>
      {
        loggedIn === "usuario" &&
        (<div className='w-svw h-svh flex flex-col' >
          <Header setLoggedIn={setLoggedIn} />
          <RouterComponent setPlayerState={setPlayerState} playerState={playerState} canciones={canciones} setActiveSong={setActiveSong} activeSong={activeSong} />
          <MusicBar setPlayerState={setPlayerState} playerState={playerState} activeSong={activeSong} setActiveSong={setActiveSong} />
        </div>)
      }
      {
        loggedIn === "admin" &&
        (<div className='relative w-svw h-svh flex flex-col' >
          <Header setLoggedIn={setLoggedIn} esUsuario={false} />
          <div id='modal' className='absolute top-0 left-0 w-full h-full bg-black z-20 bg-opacity-60 flex items-center justify-center transition-opacity'>
            <div className='bg-white min-w-56 p-4 rounded-md flex flex-col'>
              <div className='flex gap-2 items-center text-black'>
                <label className='grow font-bold text-lg'>Información</label>
                <button
                  onClick={() => setModal(p => !p)}
                  className="w-fit h-fit group cursor-pointer outline-none rotate-45 hover:-rotate-45 duration-300 self-end"
                >
                  <svg
                    className="stroke-black fill-none group-hover:stroke-red-500  transition-all group-active:fill-red-200 duration-100"
                    viewBox="0 0 24 24"
                    height="50px"
                    width="50px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeWidth="1.5"
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    ></path>
                    <path strokeWidth="1.5" d="M8 12H16"></path>
                    <path strokeWidth="1.5" d="M12 16V8"></path>
                  </svg>
                </button>
              </div>
              {modalContent}
            </div>
          </div>
          <RouterAdmin setPlayerState={setPlayerState} playerState={playerState} canciones={canciones} setActiveSong={setActiveSong} activeSong={activeSong} setModalContent={setModalContent} setModal={setModal} />

        </div>
        )
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