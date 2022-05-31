import React from "react";
import { ReactDOM } from "react";

export default function Footer(porps?: any) {
    return (
        <footer className="w-full py-3 px-4 bg-blue-500 flex justify-between items-center">
            <div className="flex flex-col text-white ">
                <div className="items-center text-xl">
                    <span className="pr-1 text-2xl font-normal leading-normal">
                        Nazarete
                    </span>
                    © 2022
                </div>
                <div className="text-lg">
                    <a href="/terms-of-use" className="pr-5">Terms of use</a>
                    <a href="/privacy" className="pr-5">Privacy policy</a>
                </div>
            </div>
            <div className="text-white flex flex-col leading-normal">
                <div className="font-semibold">Developed by:</div>
                <div className="pl-2">Sepehr Ganji</div>
                <div className="pl-2">Sana mehrab beigi</div>
                <div className="pl-2">Alireza Nobakht</div>
            </div>
        </footer>
    )
}