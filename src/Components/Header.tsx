import jwtDecode from "jwt-decode";
import React from "react";
import { ReactDOM } from "react";
import useAuth from "../hooks/useAuth";

export default function Header(porps?: any) {
    const {auth}:any = useAuth()
    const user:any = jwtDecode(auth.access_token);
    
    return (
        <header className="w-full shadow-md">
            <div className="w-full py-2 px-3 flex justify-between items-center">
                <div className="text-xl font-normal leading-normal">
                    <button className="font-semibold hover:text-gray-600">
                        New Nazarte
                    </button>
                </div>
                <div className="flex items-center justify-center content-center text-center">
                    <p className="text-lg font-light leading-relaxed pr-3">
                        Welcome, {user.un}
                    </p>
                    <button className="text-md font-normal leading-normal hover:text-gray-600">
                        logout
                    </button>
                </div>
            </div>
        </header>
    )
}