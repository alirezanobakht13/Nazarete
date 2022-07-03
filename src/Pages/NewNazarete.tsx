import React from "react";
import { ReactDOM } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function NewNazarete(props?: any) {
    const current = new Date()
    const [invalid, setInvalid] = useState(false);
    const [accepted, setAccepted] = useState(false)
    const [status, setStatus] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const { auth }: any = useAuth()

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const navigate = useNavigate();


    const url = process.env.REACT_APP_BACKEND_URL

    const handleSubmit = () => {
        console.log(url);
        const data = {
            "title": title,
            "desc": desc
        }
        const backend = axios.create({ baseURL: url })
        backend.post('post/add/', data, {
            headers: {
                Authorization: 'Bearer ' + auth.access_token,
            }
        })
            .then((res) => {
                console.log(res);
                setAccepted(true);
                setTimeout(navigate, 2000, '/');
            })
            .catch((err) => {
                console.log(err);
                setStatus(err.response.status);
                setErrorMessage(err.response.data["message"] || err.response.data["error"]);
                setInvalid(true);
                console.log(err.response.data);
            })
    }

    return (
        <div className="h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <div className="w-full flex grow items-center">
                <div className="w-4/5 lg:w-3/6 mx-auto">
                    <div className="w-full flex flex-col bg-white rounded-xl px-5 shadow-xl">
                        <div className="w-full rounded-xl flex flex-col my-3">
                            <div className="my-3 mx-6 flex align-middle justify-between items-center">
                                <input type={"text"} placeholder="Nazerete Title" className="text-3xl font-normal leading-normal mt-0 mb-1 outline-none pr-3 w-full"
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                        setInvalid(false);
                                    }} />
                                <div className="leading-relaxed font-thin">
                                    {current.toLocaleDateString()}
                                </div>
                            </div>
                            <hr />
                            <div className="my-2 mx-6">
                                <textarea className="w-full text-lg font-light leading-relaxed mt-0 mb-4 outline-none" style={{ minHeight: "12rem" }} placeholder="description of nazarete ..."
                                    onChange={(e) => {
                                        setDesc(e.target.value);
                                        setInvalid(false);
                                    }} />
                            </div>
                        </div>
                        <div className={"flex w-full justify-end mb-1 " + (!accepted ? 'hidden' : '')}>
                            <small className="font-normal leading-normal text-green-500">
                                New Nazarete has been submitted successfully.
                            </small>
                        </div>
                        <div className={"flex w-full justify-end mb-1 " + (!invalid ? 'hidden' : '')}>
                            <small className="font-normal leading-normal text-red-500">
                                Something's wrong! <br />
                                error code: {status} <br />
                                error message: {errorMessage}
                            </small>
                        </div>
                        <div className="flex w-full justify-end my-2">
                            <button className="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}