import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Add from './pages/add';
import Edit from './pages/edit';
import './App.css';  /* Import CSS */

function App() {
    return (
        <div className="container">
            <h1>Personal Finance Tracker</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/:id/edit" element={<Edit />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
