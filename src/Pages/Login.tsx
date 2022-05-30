import React from "react";
import { ReactDOM } from "react";

export default function Login(props?: any) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div id="form" className="flex md:w-1/2 w-10/12 max-w-lg flex-col">
                <h1 className="text-center text-6xl font-normal leading-normal mt-0 mb-4 text-blueGray-800">
                    Login
                </h1>
                <div className="flex w-full rounded bg-slate-50 p-4 flex-col">
                    <div className="flex w-full items-center">
                        <h6 className="w-1/2 text-xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
                            Username:
                        </h6>
                        <div className="relative flex w-full flex-wrap items-stretch mb-3">
                            <input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full items-center my-5">
                        <h6 className="w-1/2 text-xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
                            Password:
                        </h6>
                        <input type='text' id="password" name="password" className="grow border rounded h-8" />
                    </div>
                    <div className="flex w-full justify-end">
                        <button className="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}