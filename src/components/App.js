import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import SignUp from './auth/SignUp';

const App = () => {
    return (

        <div>
            <BrowserRouter>
                <div className="mx-auto mb-5">
                    <Header />
                </div>
                <Routes>
                    <Route path="/" exact element={<Welcome />} />
                    <Route path="/signup" exact element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;