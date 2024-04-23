import { Router, Routes, Route, Navigate } from "react-router-dom";

export default function () {
    return (
        <Routes>
            <Route path="/login" element={<div> a</div>} />
            <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
    );
}