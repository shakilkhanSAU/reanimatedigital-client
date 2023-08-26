import React from 'react';
import showUp1 from '../../../assets/showup/showup1.jpg'
import showUp2 from '../../../assets/showup/showup2.jpg'
import showUp3 from '../../../assets/showup/showup3.jpg'
import showUp4 from '../../../assets/showup/showup4.jpg'
import showUp5 from '../../../assets/showup/showup5.jpg'
import showUp6 from '../../../assets/showup/showup6.jpg'
import showUp7 from '../../../assets/showup/showup7.jpg'


const ShowUp = () => {
    return (
        <div className='bg-base-300 md:px-24 px-6 py-10 md:py-44'>
            <div>
                <h1 className="text-2xl md:text-3xl mb-4 font-bold md:pb-10">
                    <span className='text-red-600'>Re</span><span >Animate</span> Gems
                </h1>
            </div>
            <div className='flex flex-col md:px-40 px-6 bg-base-300'>
                <div>
                    <div className="carousel rounded-box">
                        <div className="carousel-item">
                            <img src={showUp1} alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src={showUp2} alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src={showUp3} alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src={showUp4} alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src={showUp5} alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src={showUp6} alt="Burger" />
                        </div>
                        <div className="carousel-item">
                            <img src={showUp7} alt="Burger" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ShowUp;