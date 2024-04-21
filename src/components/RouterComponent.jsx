import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, SongDetail, ArtistDetail, Search } from './'

export default function () {
    return (
        
            <div className="flex flex-grow flex-col h-[calc(100vh-120px)] justify-center items-center">
                <div className="w-full h-full px-6 overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/artists" element={<div>Artistas</div>} />
                        <Route path="/feed" element={<div>Alimentar</div>} />
                        <Route path="/songs" element={<div>Canciones</div>} />
                        <Route path="/artists/:id" element={<ArtistDetail />} />
                        <Route path="/songs/:songid" element={<SongDetail />} />
                        <Route path="/search/:searchTerm" element={<div>Search Detail</div>} />
                        <Route path="/about" element={<div>Acerca de</div>} />
                    </Routes>
                </div>
            </div>
    );
}