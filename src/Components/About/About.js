import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { styles } from '../Home/Hero/Hero';
import './About.css'
import Navigation from '../Shared/Navigation/Navigation';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='imageContainer'>
                        <img src="https://i.ibb.co/BCCfSHp/about-us.png" alt="Movie" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button style={styles.customButtonStyle} className="btn glass btn-secondary md:px-10">Hire Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;