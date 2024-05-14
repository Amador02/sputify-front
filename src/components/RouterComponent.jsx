import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, SongDetail, ArtistDetail, Search } from './'
import { AnimatePresence } from 'framer-motion';

export default function router({ canciones, setActiveSong, activeSong }) {
    return (

        <div className="flex flex-grow flex-col h-full justify-center items-center overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
                <div className="w-full h-full px-6 flex xl:flex-row flex-col">
                    <Routes>
                        <Route path="/home" element={<Home setActiveSong={setActiveSong} canciones={canciones} activeSong={activeSong} />} />
                        <Route
                            path="/*"
                            element={<Navigate to="/error" replace />}
                        />
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route
                            path="/login"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route path="/error" element={<button >Error</button>} />
                        <Route path="/home" element={<Home setActiveSong={setActiveSong} canciones={canciones} activeSong={activeSong} />} />
                        <Route path="/search" element={<Search setActiveSong={setActiveSong} />} />
                        <Route path="/artists" element={<div>Artistas</div>} />
                        <Route path="/feed" element={<div>Alimentar</div>} />
                        <Route path="/songs" element={<div>Canciones</div>} />
                        <Route path="/artists/:id" element={<ArtistDetail />} />
                        <Route path="/songs/:songid" element={<SongDetail />} />
                        <Route path="/search/:searchTerm" element={<div>Search Detail</div>} />
                        <Route path="/about" element={<div>Acerca de</div>} />
                    </Routes>
                </div>
            </AnimatePresence>
        </div>
    );
}