import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { styles } from '../Home/Hero/Hero';
import './About.css'
import Navigation from '../Shared/Navigation/Navigation';
import bgrobo from '../../assets/robo.gif'

const About = () => {

    componentDidMount();
    function componentDidMount() {
        document.title = "ReAnimate | About";
    }
    return (
        <div className='overflow-hidden'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full'>
                        <img src={bgrobo} alt="" className='w-full' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button style={styles.customButtonStyle} className="btn glass btn-secondary md:px-10">Hire Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;