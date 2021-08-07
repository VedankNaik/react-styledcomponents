import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import IntroSection from '../components/IntroSection';
import Sections from '../components/Sections';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> 
        <IntroSection />
        <Sections />
        </>
    )
};

export default Home;
