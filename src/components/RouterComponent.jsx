import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, SongDetail, ArtistDetail, Search, BusquedaOr, Artistas, Canciones } from './'
import { AnimatePresence } from 'framer-motion';

export default function router({ setPlayerState, playerState, setActiveSong, activeSong }) {
    return (

        <div className="grow flex flex-col max-h-full h-full overflow-y-auto overflow-x-hidden justify-center items-center">
            <div className="w-full h-full flex xl:flex-row flex-col">
                <Routes>
                    <Route path="/home" element={<Home setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} />} />
                    <Route path="/*" element={<Navigate to="/error" replace />} />
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/login" element={<Navigate to="/home" replace />} />
                    <Route path="/error" element={<button>Error</button>} />
                    <Route path="/home" element={<Home setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} activeSong={activeSong} />} />
                    <Route path="/search" element={<Search setActiveSong={setActiveSong} />} />
                    <Route path="/songs" element={<Canciones setActiveSong={setActiveSong} setPlayerState={setPlayerState} playerState={playerState}/>} />
                    <Route path="/artists" element={<Artistas />} />
                    <Route path="/artists/:id" element={<ArtistDetail />} />
                    <Route path="/songs/:songid" element={<SongDetail activeSong={activeSong} playerState={playerState} setActiveSong={setActiveSong} setPlayerState={setPlayerState} />} />
                    <Route path="/about" element={<div>Creado por: Juan M. Amador y Juan M. Perdomo</div>} />
                </Routes>
            </div>
        </div>
    );
}