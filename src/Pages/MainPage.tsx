import React from "react";
import { ReactDOM } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nazarete from "../Components/Nazarete";

export default function MainPage(props?: any){
    return (
        <div className="h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <div className="overflow-auto w-full grow">
                <Nazarete />
                <Nazarete />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}