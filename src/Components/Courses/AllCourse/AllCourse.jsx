import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Courses from '../../Home/Courses/Courses';
import './AllCourse.css';
import Navigation from '../../Shared/Navigation/Navigation';
import AllCourseHero from './AllCourseHero';

const AllCourse = () => {
    // custom title for this page
    componentDidMount();
    function componentDidMount() {
        document.title = "ReAnimate | Courses";
    }

    return (
        <div>
            <Navigation></Navigation>
            <AllCourseHero></AllCourseHero>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default AllCourse;