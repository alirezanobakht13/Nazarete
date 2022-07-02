import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/Signup';
import MainPage from './Pages/MainPage';
import { AuthProvider } from './Context/AuthProvider';
import RequireAuth from './Components/RequireAuth';
import NewNazarete from './Pages/NewNazarete';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                {/* <App /> */}
                <Routes>
                    <Route element={<RequireAuth />}>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/mainPage" element={<HomePage />} />
                        <Route path="/newNazarete" element={<NewNazarete />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
