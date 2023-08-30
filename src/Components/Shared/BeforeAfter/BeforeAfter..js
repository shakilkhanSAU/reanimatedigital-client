import React from 'react';
import './BeforeAfter.css'
import { ArrowsOutLineHorizontal } from '@phosphor-icons/react';

const BeforeAfter = () => {
    return (
        <div className='mt-10'>
            <main>
                <div className="container">
                    <div className="image-container image-full">
                        <img
                            className="imgae-before"
                            src="https://i.ibb.co/6DS29yF/before.jpg"
                            alt="before"
                        />
                        <img
                            className="imgae-after"
                            src="https://i.ibb.co/CPgVNVL/after.png"
                            alt="after"
                        />
                    </div>
                    <input type="range" min='0' max='100' value={50} aria-label='parcentage of before photo shown' />
                    <div className="slider-line"></div>
                    <div className="slider-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" viewBox="0 0 256 256"><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"></path></svg>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BeforeAfter;