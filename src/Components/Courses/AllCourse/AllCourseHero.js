import React from 'react';
import { styles } from '../../Home/Hero/Hero';

const AllCourseHero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"><span className='text-red-600 m-0'>Re</span><span className=''>Animate</span><span className="text-[#45ceae]"> Courses</span></h1>

                        <button style={styles.customButtonStyle} className="btn btn-primary glass"><a href="#courses"> Explore Now</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourseHero;