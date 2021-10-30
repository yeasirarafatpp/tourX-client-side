import React from 'react';
import Iframe from 'react-iframe';
import aboutImg from '../../images/aboutImg.png'

const About = () => {
    return (
        <div className="py-3 container">
            <h3 className="text-center">Want to Know About Us?</h3>
            <div className="row">
                <div className="col-md-8">
                    <h4>About Us</h4>
                    <p>What we are and our history</p>
                    <p>Founded in 2021 in Bangladesh, Tourx.com has grown from a small Dutch startup to one of the world’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), TourX.com’s mission is to make it easier for everyone to experience the world.</p>
                    <hr />
                    <h4>Our Vision</h4>
                    <p>What we are and our history</p>
                    <p>TourX.com is available in 43 languages and offers more than 28 million total reported accommodation listings, including over 6.2 million listings alone of homes, apartments and other unique places to stay. No matter where you want to go or what you want to do, Booking.com makes it easy and backs it all up with 24/7 customer support.</p>
                </div>
                <div className="col-md-4 bg-primary">
                    <img className="img-fluid" src={aboutImg} alt="" />
                </div>
            </div>
            <br />
            <h3 className="text-center py-2 text-info">Our Location</h3>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.91172955948!2d89.30016555076658!3d24.841520864198245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1634575712840!5m2!1sen!2sbd"
                width="100%"
                height="375px"
            ></Iframe>
        </div>
    );
};

export default About;