import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleTour = () => {
    const { tourId } = useParams();
    const [tour, setTour] = useState({});
    useEffect(() => {
        const url = `https://boiling-cove-04802.herokuapp.com/tours/${tourId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <div className="card">
                        <img src={tour.desImg} className="card-img-top" alt="Tour" />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">${tour.price} / Per Person</h5>
                                <h6>{tour.rate}k+ Rating</h6>
                            </div>
                            <h2 className=" text-warning">{tour.destination}</h2>
                            <p className="card-text">{tour.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7">
                    <h3>Please Submit form to place an order</h3>
                </div>
            </div>
        </div>
    );
};

export default SingleTour;