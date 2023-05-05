import React from 'react';
import '../../App.css';
import './AboutUs.css';
import videos from '../../components/Video/video2.mp4'

function AboutUs() {
    return (
    <div className='hero-container'>
        <video autoPlay loop muted>
            <source src = {videos} type="Video/mp4" />
        </video>
        <h1>About Us</h1>
        <p>
        Snap is a project that consist for students to build an analytics platform for the DISC staff.
        It is to allow them to know the number of students that are enrolled, the student ID, the student course and units they are enrolled in and is focused on the School of Information Technology area.
        </p>
    </div>
    );
};

export default AboutUs;