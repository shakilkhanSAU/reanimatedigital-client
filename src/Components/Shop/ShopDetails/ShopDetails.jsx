import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import BeforeAfter from '../../Shared/BeforeAfter/BeforeAfter.';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { styles } from '../../Home/Hero/Hero';


const ShopDetails = () => {
    // custom title for this page
    componentDidMount();
    function componentDidMount() {
        document.title = "ReAnimate | Shop";
    }

    const before = 'https://i.ibb.co/6DS29yF/before.jpg'
    const after = 'https://i.ibb.co/CPgVNVL/after.png'


    return (
        <div>
            <Navigation />
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="slider-container">
                        <ReactCompareSlider
                            style={{ height: '75vh', width: '90vw', margin: 'auto' }}
                            itemOne={<ReactCompareSliderImage src='https://i.ibb.co/CPgVNVL/after.png' srcSet="" alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src='https://i.ibb.co/6DS29yF/before.jpg' srcSet="" alt="Image two" />}
                        />
                    </div>

                    <div>
                        <h1 className="mb-5 mt-10 md:mt-18 text-2xl md:text-5xl font-bold"><span className='text-red-600'>Color</span> Your Life</h1>

                    </div>
                    <div>
                        <div className="md:m-4 grid items-center justify-center">

                            <img src="https://i.ibb.co/vxwkdDd/lut1.png" alt="Shoes" className="rounded-xl image-full" />

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Color Your Life</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShopDetails;