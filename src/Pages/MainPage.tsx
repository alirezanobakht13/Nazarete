import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nazarete from "../Components/Nazarete";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function MainPage(props?: any) {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const { auth }: any = useAuth()

    const url = process.env.REACT_APP_BACKEND_URL
    const backend = axios.create({ baseURL: url });
    const config = {
        headers: {
            Authorization: 'Bearer ' + auth.access_token,
        }
    }

    useEffect(() => {
        backend.get('post/all/', config)
            .then((res) => {
                console.log(res);
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleSearch = (q: string) => {
        const newConfig = {
            ...config,
            params:{
                'q':q
            }
        }
        backend.get('post',newConfig)
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className="h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <div className="overflow-auto w-full grow flex flex-col">
                <div className="w-full mb-3 mt-6 w-4/5 lg:w-2/6 mx-auto">
                    <div className="flex justify-between rounded-xl border bg-indigo-50">
                        <input placeholder="Search ..." className="my-2 mr-3 ml-2 pl-3 py-1 w-full outline-none bg-indigo-50"
                        onChange={(e)=>{
                            setSearch(e.target.value);
                            handleSearch(e.target.value);
                        }}/>
                        <button className="py-3 mx-3">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    {posts.map((post: any, i) => {
                        return <Nazarete nazarete_title={post.title} nazarete_desc={post.desc} nazarete_id={post.id} />
                    })}
                    {/* <Nazarete />
                <Nazarete /> */}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}