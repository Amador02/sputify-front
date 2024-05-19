import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, SongDetail, ArtistDetail, Search, BusquedaOr } from './'
import { AnimatePresence } from 'framer-motion';

export default function router({ setPlayerState, playerState, canciones, setActiveSong, activeSong }) {
    return (

        <div className="grow flex flex-col max-h-full h-full overflow-y-auto overflow-x-hidden justify-center items-center">
            <div className="w-full h-full flex xl:flex-row flex-col">
                <Routes>
                    <Route path="/home" element={<Home setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} canciones={canciones} activeSong={activeSong} />} />
                    <Route path="/*" element={<Navigate to="/error" replace />} />
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/login" element={<Navigate to="/home" replace />} />
                    <Route path="/error" element={<button>Error</button>} />
                    <Route path="/favsongs" element={<label>Favoritas</label>} />
                    <Route path="/home" element={<Home setPlayerState={setPlayerState} playerState={playerState} setActiveSong={setActiveSong} canciones={canciones} activeSong={activeSong} />} />
                    <Route path="/search" element={<Search setActiveSong={setActiveSong} />} />
                    <Route path="/artists" element={<div>Artistas</div>} />
                    <Route path="/feed" element={<div>Alimentar</div>} />
                    <Route path="/songs" element={<div>Canciones</div>} />
                    <Route path="/artists/:id" element={<ArtistDetail />} />
                    <Route path="/songs/:songid" element={<SongDetail canciones={canciones} activeSong={activeSong} playerState={playerState} setActiveSong={setActiveSong} setPlayerState={setPlayerState} />} />
                    <Route path="/search-and/:type1/:searchTerm1/:type2/:searchTerm2" element={<div>Search Detail</div>} />
                    <Route path="/search-or/:type1/:searchTerm1/:type2/:searchTerm2" element={<BusquedaOr />} />
                    <Route path="/about" element={<div>Acerca de</div>} />
                </Routes>
            </div>
        </div>
    );
}