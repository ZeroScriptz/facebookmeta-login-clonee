import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import './App.css';


type Props = {};

function Name({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Connect with friends and the world around you on Facebook.", 
        "Facebook login clone created by Zack Darnell"],
        loop: true,
        delaySpeed: 2000,
    });
    return ( <div className="">
        <p className="text-2xl divider">{text}</p>
    </div>)
}

export {Name};