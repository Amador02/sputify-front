import { Router, Routes, Route, Navigate } from "react-router-dom";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";
import Hero from "../components/Hero";

export default function ({ setLoggedIn }) {
    return (
        <Routes>
            <Route path="/home" element={<Hero />} />
            <Route path="/login" element={<LoginView setLoggedIn={setLoggedIn} />} />
            <Route path="/signup" element={<RegisterView setLoggedIn={setLoggedIn} />} />
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    );
}