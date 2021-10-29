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
                    <p>Our Clinic was at the forefront of modern medicine when its founders opened it as a multi-specialty group practice in 1921. In its first century, Our Clinic has introduced many medical firsts, opened facilities around the world and is proud to be ranked among the top hospitals in the country. </p>
                    <hr />
                    <h4>Our Vision</h4>
                    <p>What we are and our history</p>
                    <p>To inspire hope, and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education and research. our Clinic will provide an unparalleled experience as the most trusted partner for health care</p>
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