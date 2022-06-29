import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { ReactDOM } from "react";
import useAuth from "../hooks/useAuth";

export default function HomePage(props?:any){
    const {auth}:any = useAuth()

    useEffect(()=>{
        console.log(auth)
        console.log(jwtDecode(auth))
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    )
}