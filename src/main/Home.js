import React, { useEffect, useState } from "react";
import './home.css'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import WebDesigning from "./WebDesign";
import WebDevelopment from "./WebDevelopment";
import Analytics from "./analytics";
import AppDevelopment from "./AppDevelopment";
import Footer from "../footer/footer"




export default function Home({ setProgress }) {
    setProgress(10);
    

    // For Typewritter effect
    const [text] = useTypewriter({
        words: ['Web Development .', 'App Development .', 'Web Design .'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    });


    // For total number of visitors
    const [randomNumber, setRandomNumber] = useState();

    useEffect(() => {
        const generateRandomNumber = () => {
            setRandomNumber(Math.floor(Math.random() * 1000000));
        };
        generateRandomNumber();
        const timer = setInterval(() => {
            generateRandomNumber();
        }, 100);
        setTimeout(() => {
            clearInterval(timer);
        }, 4000)

        return () => clearTimeout(timer);
    }, []);



    return (

        <div className="Home">
            <div className="container">
                <div className="main-container">
                    <div className="Headings">
                        <h2 >Services Provided
                            <br /><span> {text}</span>
                            <Cursor></Cursor>
                        </h2>
                    </div>
                    <div className="description"><p>
                        At <strong>MeCode</strong>, we specialize in creating exceptional digital experiences. From custom app development to stunning web design, we're your go-to partner for all your digital needs. Explore our services and let's bring your ideas to life!
                    </p>
                    </div>
                </div>
            </div>

            <WebDesigning />

            <div className="users">
                <div className="counter">
                    <h2>Total Number of user Visited: </h2>
                    <h1>{randomNumber}</h1>
                </div>
            </div>

            <WebDevelopment />

            <Analytics />

            <AppDevelopment />

            <Footer/>

            {setProgress(100)}
        </div>
    )

}