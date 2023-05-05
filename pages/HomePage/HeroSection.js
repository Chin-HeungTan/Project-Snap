import React from 'react';
import '../../App.css';
import './HeroSection.css';
import videos from '../../components/Video/video.mp4'

function HeroSection() {
    return (
    <div className='hero-container'>
        <video autoPlay loop muted>
            <source src = {videos} type="Video/mp4" />
        </video>
        <h1>Welcome To</h1>
        <p>Student Numbers Analytics Platform </p>
    </div>
    );
};

export default HeroSection;