import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, SongDetail, ArtistDetail, Search, BusquedaOr, Consulta, Management } from '.'

export default function router({ setModal, setModalContent }) {
    return (
        <div className="grow h-full w-full flex flex-row overflow-y-auto overflow-x-hidden justify-center items-center gap-4">
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/*" element={<Navigate to="/home" replace />} />
                <Route path="/error" element={<button>Error</button>} />
                <Route path="/management" element={<Management setModal={setModal} setModalContent={setModalContent} />} />
                <Route path="/see" element={<Consulta setModal={setModal} setModalContent={setModalContent} />} />
                <Route path="/about" element={<div>Acerca de</div>} />
            </Routes>
        </div>
    );
}