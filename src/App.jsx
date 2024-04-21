import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, SongDetail, ArtistDetail, MusicBar, LogoFull, LeftBar, Search } from './components'
import { useState, useEffect } from 'react';
import Results from './Results';
import { Spotify } from './assets/svgs';


function App() {
  return (
    <Router>
      <div className='w-[100%] h-10 flex items-center justify-center' >
        <img  className='h-[100%]' src={Spotify} alt="spotify" />
      </div>
      <LeftBar />
      <div className="flex flex-col justify-center items-center">
        {/* inicio ||  Explorar || Artistas 🔥 || Cuenta */}
        <div className="px-6 h-[calc(100vh-130px)] overflow-y-scroll w-[100%] hide-scrollbar flex xl:flex-row flex-col-reverse flex-grow">
          <div className="flex-1 h-fit pb-40">
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
        <MusicBar />
      </div>
    </Router>
  );
}

export default App;
