import React from 'react';
import heroBackground from '../../../herob/hero-b.mp4'

const Hero = () => {
    return (
        <div>
            <div className='main'>
                <video style={styles.heroBackground} autoPlay loop muted className="hero-background" src={heroBackground} />
                <div style={styles.heroTitle}>
                    <h1 className="text-5xl font-bold">
                        <span className='text-red-600'>Re</span><span className='text-white'>Animate</span>
                    </h1>
                    <p className="py-2 text-xl">Made in different way</p>
                    <button style={styles.customButtonStyle} className="btn glass btn-secondary md:px-10">Hire Now</button>
                </div>
            </div>
        </div>

    );
};

export const styles = {
    main: {
        height: '90vh',
        width: '100%',
        zIndex: '-1',
    },
    heroBackground: {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
    },
    heroTitle: {
        position: 'absolute',
        width: '100%',
        height: '80vh',
        top: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonStyle: {
        backgroundColor: 'crimson',
        color: 'white',
    }
}


export default Hero;