import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nazarete from "../Components/Nazarete";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function MainPage(props?: any){
    const [posts,setPosts] = useState([])
    const {auth}:any = useAuth()

    const url = process.env.REACT_APP_BACKEND_URL

    useEffect(() => {
        const backend = axios.create({ baseURL: url });
        backend.get('post/all/', {
            headers: {
                Authorization: 'Bearer ' + auth.access_token,
            }
        })
            .then((res) => {
                console.log(res);
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <div className="overflow-auto w-full grow">
                {posts.map((post:any,i)=>{
                    return <Nazarete nazarete_title={post.title} nazarete_desc={post.desc} nazarete_id={post.id}/>
                })}
                {/* <Nazarete />
                <Nazarete /> */}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}