import React from 'react';

const Footer = () => {
    return (
        <div className="bg-light">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h2>Tour X</h2>
                        <p>Founded in 2021 in Bangladesh, Tourx.com has grown from a small Dutch startup to one of the world’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), TourX.com’s mission is to make it easier for everyone to experience the world</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h2>Contact</h2>
                        <p>
                            Address: Bogura Bangladesh.
                            <br />
                            Phone: 012542545241
                            <br />
                            Email: contact@tourx.com
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-center">Copyright All Right Reserved 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;