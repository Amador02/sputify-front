import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, SongDetail, ArtistDetail } from './components'

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <h2 className="text-white">Sputify</h2>
        {/* inicio ||  Explorar || Artistas 🔥 || Cuenta */}
        <div className="px-6 h-[calc(100vh)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse flex-grow">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-artists" element={<div>Top Artists</div>} />
              <Route path="/top-charts" element={<div>Top Charts</div>} />
              <Route path="/around-you" element={<div>Around You</div>} />
              <Route path="/artists/:id" element={<ArtistDetail />} />
              <Route path="/songs/:songid" element={<SongDetail />} />
              <Route path="/search/:searchTerm" element={<div>Search Detail</div>} />
            </Routes>
          </div>
        </div>
        <div className="absolute h-16 bottom-0 left-0 right-0 flex animar-barra bg-[#1ed760] backdrop-blur-lg rounded-t-3xl z-10">a</div>
      </div>
    </Router>
  );
}

export default App;
