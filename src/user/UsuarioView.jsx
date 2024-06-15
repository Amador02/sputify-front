import { useState } from "react";
import { Header, RouterComponent, MusicBar } from '../components'
const usuario = ({ setLoggedIn }) => {
    const [playerState, setPlayerState] = useState({
        playing: false,
        duration: 0,
        durationFormat: '0:00',
        time: 0,
        timeFormat: '0:00',
    });
    const [activeSong, setActiveSong] = useState(
        {
            name: "Happier",
            artistName: "Marshmello",
            cover: "/src/assets/imgs/album.jpeg",
            url: "https://www.youtube.com/watch?v=m7Bc3pLyij0"
        },
    );
    return (
        <div className='w-svw h-svh flex flex-col' >
            <Header setLoggedIn={setLoggedIn} />
            <RouterComponent setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} />
            <MusicBar setPlayerState={setPlayerState} playerState={playerState} activeSong={activeSong} setActiveSong={setActiveSong} />
        </div>)
}
export default usuario;