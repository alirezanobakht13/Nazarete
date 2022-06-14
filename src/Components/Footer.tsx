import React from "react";
import { ReactDOM } from "react";

export default function Footer(porps?: any) {
    return (
        <footer className="w-full py-1 px-3 bg-blue-500 flex justify-between items-center">
            <div className="flex flex-col text-white mr-1">
                <div className="items-center text-lg">
                    <span className="pr-1 font-normal leading-normal">
                        Nazarete
                    </span>
                    © 2022
                </div>
                <div className="text-sm">
                    <a href="/terms-of-use" className="pr-5">Terms of use</a>
                    <a href="/privacy" className="pr-5">Privacy policy</a>
                </div>
            </div>
            <div className="text-white flex flex-col leading-normal ml-1">
                <small className="font-semibold">Developed by:</small>
                <div className="flex flex-wrap">
                <small className="px-1 font-normal leading-normal">Sepehr Ganji</small>
                <small className="px-1 font-normal leading-normal">Sana mehrab beigi</small>
                <small className="px-1 font-normal leading-normal">Alireza Nobakht</small>
                </div>
            </div>
        </footer>
    )
}