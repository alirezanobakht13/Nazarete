import { faAddressCard, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ReactDOM } from "react";
import Footer from "../Components/Footer";

export default function SignUp(props?: any) {

    const [invalid,setInvalid] = useState(false)

    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-center items-center grow">
                <div id="form" className="flex md:w-1/2 w-10/12 max-w-lg flex-col">
                    <h1 className="text-center text-6xl font-normal leading-normal mt-0 mb-10 text-blueGray-800">
                        SignUp
                    </h1>
                    <div className="flex w-full rounded p-4 flex-col">
                        <div className="flex w-full items-center">
                            <h6 className="w-1/2 text-xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
                                Full name:
                            </h6>
                            <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                <input type="text" placeholder="username" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full items-center mt-4">
                            <h6 className="w-1/2 text-xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
                                National code:
                            </h6>
                            <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                <input type="number" placeholder="username" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full items-center my-4">
                            <h6 className="w-1/2 text-xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
                                Password:
                            </h6>
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <input type="text" placeholder="password" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                    <FontAwesomeIcon icon={faKey} />
                                </span>
                            </div>
                        </div>                        
                        <div className={"flex w-full justify-end mb-1 " + (!invalid? 'hidden':'')}>
                        <small className="font-normal leading-normal text-red-500">
                            Signup error! you may check your input again.
                        </small>
                        </div>
                        <div className="flex w-full justify-end mt-2">
                            <button className="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
                                Submit
                            </button>
                        </div>
                        <div className="flex w-full justify-end">
                        <small className="font-normal leading-normal mt-4">
                            or 
                            <a href="/login" className="px-1 underline text-cyan-400 hover:text-cyan-600">login</a>
                            if you have an account.
                        </small>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}