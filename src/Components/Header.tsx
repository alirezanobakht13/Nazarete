import jwtDecode from "jwt-decode";
import React from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header(porps?: any) {
    const { auth, setAuth }: any = useAuth();
    const user: any = jwtDecode(auth.access_token);
    const navigate = useNavigate()

    return (
        <header className="w-full shadow-md py-1 flex bg-indigo-50">
            <div className="w-full py-1 px-3 flex justify-between items-center">
                <div className="text-xl font-normal leading-normal">
                    <button className="font-semibold hover:text-gray-600"
                    onClick={()=>{
                        navigate('/newNazarete')
                    }}>
                        New Nazarte
                    </button>
                </div>
                <div className="flex items-center justify-center content-center text-center">
                    <p className="text-lg font-light leading-relaxed pr-3">
                        Welcome, {user.un}
                    </p>
                    <button className="text-md font-normal leading-normal hover:text-gray-600"
                        onClick={() => {
                            console.log("logout clicked")
                            setAuth({});
                            localStorage.removeItem("auth");
                            navigate('/login')
                        }}>
                        logout
                    </button>
                </div>
            </div>
        </header>
    )
}