import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

const CourseDetails = () => {

    const handleLink = () => {

    }
    return (
        <div>
            <Navigation></Navigation>
            <div className='hidden md:block '>
                <div className="hero h-40 md:h-80" style={{ backgroundImage: 'url(https://i.ibb.co/FYGzn42/course1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 mt-16 md:mt-24 text-xl md:text-5xl font-bold">Course Title Here</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex px-3 md:px-20 items-center justify-center'>
                <div>
                    <article>
                        <h1 className="mb-5 mt-16 md:mt-24 text-2xl md:text-5xl font-bold"><span className='text-red-600'>Blender</span> : Zero to Hero  </h1>


                        {/* you tube video here */}
                        <div className="grid md:grid-cols-6 gap-4  my-10">
                            <div className='col-span-6 md:col-span-6 lg:col-span-4'>
                                <Iframe
                                    className=''
                                    width="100%"
                                    height="100%"
                                    display="block"
                                    position="relative"
                                    url="https://www.youtube.com/embed/-OOzHpKtG2Y?si=2KFEPeqaQkc4bY_7"
                                    autoplay="true"
                                >
                                </Iframe>
                            </div>
                            <div className='col-span-6 md:col-span-6 lg:col-span-2 w-full'>
                                <div className="collapse bg-base-200 w-full">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium flex-row">
                                        <h3 className='my-1 font-bold' ><span className='text-red-600'>Blender</span> : Zero to Hero </h3>
                                    </div>
                                    <div className="collapse-content w-full">
                                        <div className='grid gap-2 h-96 overflow-auto'>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link onClick={handleLink}>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>
                                            <div className="card w-full bg-base-100 rounded-md p-2">
                                                <Link>
                                                    <h5 className='my-1 font-semibold'><span className=''>Class 01:</span> <span>This is Class One</span></h5>
                                                    <p>introduction to blender and animation industry</p>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CourseDetails;