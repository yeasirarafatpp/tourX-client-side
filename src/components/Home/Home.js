import React from 'react';
import banner from '../../images/hero-banner.png';
import map from '../../images/map.png';
import Tours from '../Tours/Tours';
import WhyUs from '../WhyUs/WhyUs';
const Home = () => {
    return (
        <>
            <div className="container">
                <img className="img-fluid mx-auto" src={banner} alt="Banner" />
            </div>
            <div className="container pt-5">
                <h2 className="text-center fw-bolder fs-1 pb-3">Explore the World For <br /> <span className="text-warning">Yourself</span></h2>
                <img className="img-fluid" src={map} alt="map" />
            </div >
            <Tours></Tours>
            <WhyUs></WhyUs>
        </>
    );
};

export default Home;