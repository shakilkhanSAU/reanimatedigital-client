import React from 'react';
import Hero from '../Hero/Hero';
import Footer from '../../Shared/Footer/Footer';
import ShowUp from '../ShowUp/ShowUp';
import Courses from '../Courses/Courses';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div style={styles.container}>
            {/* <Navbar> </Navbar> */}
            <Navigation></Navigation>
            <Hero></Hero>
            <Courses></Courses>
            <ShowUp></ShowUp>
            <Footer></Footer>
        </div>
    );
};

const styles = {
    container: {

    },
};

export default Home;