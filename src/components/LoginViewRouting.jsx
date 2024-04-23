import { Router, Routes, Route, Navigate } from "react-router-dom";
import LoginView from "./LoginView";

export default function ({ setLoggedIn }) {
    return (
        <Routes>
            <Route path="/login" element={<LoginView setLoggedIn={setLoggedIn} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
    );
}