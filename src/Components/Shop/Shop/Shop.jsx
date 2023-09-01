import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import { styles } from '../../Home/Hero/Hero';
import './Shop.css';
import Navigation from '../../Shared/Navigation/Navigation';

const Shop = () => {
    // custom title for this page
    componentDidMount();
    function componentDidMount() {
        document.title = "ReAnimate | Shop";
    }

    return (
        <div>
            <Navigation></Navigation>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}


            {/* main shop item start here */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"><span className='text-red-600 m-0'>Re</span><span className=''>Animate</span><span className="text-[#45ceae]"> Shop</span></h1>

                        <button style={styles.customButtonStyle} className="btn btn-primary glass"><a href="#shop"> Explore Shop Now</a></button>
                    </div>
                </div>
            </div>

            {/* this is shop section */}
            <div className='p-6 md:px-12 bg-base-200 text-base-content py-15 '>
                <div id="shop">
                    <h1 className="mb-5 mt-10 md:pt-11 text-3xl font-bold"><span className='text-red-600 m-0'>Re</span><span className=''>Animate</span><span className="text-[#45ceae]"> Shop</span></h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center align-center">

                        <div className="card bg-base-100 shadow-xl md:m-4">
                            <figure className='imageContainer'>
                                <img src="https://i.ibb.co/TqbV59p/lut4.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Color Your Life</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl md:m-4">
                            <figure className='imageContainer'>
                                <img src="https://i.ibb.co/KNMZ0LP/lut3.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Color Your Life</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl md:m-4">
                            <figure className='imageContainer'>
                                <img src="https://i.ibb.co/dQsQ5fT/lut2.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Color Your Life</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl md:m-4">
                            <figure className='imageContainer'>
                                <img src="https://i.ibb.co/L9Qhgsf/gameasset.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Color Your Life</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See More</button>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl md:m-4">
                            <figure className='imageContainer'>
                                <img src="https://i.ibb.co/FHXjsCZ/lut1.png" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Color Your Life</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">
                                        <a href="/shop/details">See More</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Shop;