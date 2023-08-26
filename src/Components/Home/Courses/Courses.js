import React from 'react';
// import css file
import './Courses.css'
import { styles } from '../Hero/Hero';
import { Link } from 'react-router-dom';

const Courses = () => {

    const details = '/course-details'
    return (
        <div className='p-6 md:px-24 bg-base-200 text-base-content py-15 mt-14'>
            <h1 className="text-2xl md:text-3xl font-bold my-5">
                <span className='text-red-600'>Re</span><span >Animate</span> Courses
            </h1>
            <div className="grid md:grid-cols-3 md:gap-3 lg:gap-4">

                {/* grid item here */}
                <div className="card  bg-base-100 shadow-xl my-5">
                    <div className='imageContainer'>
                        <img src="https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/tenant_161/templateswidget/6310/image/large-56e04dc294aaee1013be8beb5b9ffd24.jpeg" alt="Movie" />
                    </div>
                    <div className="card-body px-4 md:px-10 py-8">
                        <h3 className="card-title md:text-3xl">Blender For Beginner</h3>
                        <p className='text-sm md:text-lg text-left py-2'>Get full access by enrolling into  the course and become a professional animator</p>
                        <Link to={details} className="card-actions justify-end">
                            <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See Details</button>
                        </Link>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl my-5">
                    <div className='imageContainer'>
                        <img src="https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/tenant_161/templateswidget/6310/image/large-56e04dc294aaee1013be8beb5b9ffd24.jpeg" alt="Movie" />
                    </div>
                    <div className="card-body px-4 md:px-10 py-8">
                        <h3 className="card-title md:text-3xl">Blender For Beginner</h3>
                        <p className='text-sm md:text-lg text-left py-2'>Get full access by enrolling into  the course and become a professional animator</p>
                        <Link to={details} className="card-actions justify-end">
                            <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See Details</button>
                        </Link>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl my-5">
                    <div className='imageContainer'>
                        <img src="https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/tenant_161/templateswidget/6310/image/large-56e04dc294aaee1013be8beb5b9ffd24.jpeg" alt="Movie" />
                    </div>
                    <div className="card-body px-4 md:px-10 py-8">
                        <h3 className="card-title md:text-3xl">Blender For Beginner</h3>
                        <p className='text-sm md:text-lg text-left py-2'>Get full access by enrolling into  the course and become a professional animator</p>
                        <Link to={details} className="card-actions justify-end">
                            <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See Details</button>
                        </Link>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl my-5">
                    <div className='imageContainer'>
                        <img src="https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/tenant_161/templateswidget/6310/image/large-56e04dc294aaee1013be8beb5b9ffd24.jpeg" alt="Movie" />
                    </div>
                    <div className="card-body px-4 md:px-10 py-8">
                        <h3 className="card-title md:text-3xl">Blender For Beginner</h3>
                        <p className='text-sm md:text-lg text-left py-2'>Get full access by enrolling into  the course and become a professional animator</p>
                        <Link to={details} className="card-actions justify-end">
                            <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See Details</button>
                        </Link>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl my-5">
                    <div className='imageContainer'>
                        <img src="https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/tenant_161/templateswidget/6310/image/large-56e04dc294aaee1013be8beb5b9ffd24.jpeg" alt="Movie" />
                    </div>
                    <div className="card-body px-4 md:px-10 py-8">
                        <h3 className="card-title md:text-3xl">Blender For Beginner</h3>
                        <p className='text-sm md:text-lg text-left py-2'>Get full access by enrolling into  the course and become a professional animator</p>
                        <Link to={details} className="card-actions justify-end">
                            <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See Details</button>
                        </Link>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl my-5">
                    <div className='imageContainer'>
                        <img src="https://d1tq3fcx54x7ou.cloudfront.net/uploads/store/tenant_161/templateswidget/6310/image/large-56e04dc294aaee1013be8beb5b9ffd24.jpeg" alt="Movie" />
                    </div>
                    <div className="card-body px-4 md:px-10 py-8">
                        <h3 className="card-title md:text-3xl">Blender For Beginner</h3>
                        <p className='text-sm md:text-lg text-left py-2'>Get full access by enrolling into  the course and become a professional animator</p>
                        <Link to={details} className="card-actions justify-end">
                            <button style={styles.customButtonStyle} className="btn md:px-10 glass btn-secondary">See Details</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default Courses;