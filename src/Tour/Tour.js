import React from 'react';
import tourImg from '../images/p-1.png';

const Tour = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 container">
            <div className="col-sm-1 col-md-4 col-lg-4">
                <div className="card">
                    <img src={tourImg} className="card-img-top" alt="Tour" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">$128 / Per Person</h5>
                            <h6>Rating</h6>
                        </div>
                        <h2 className=" text-warning">Tour Name</h2>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button className="btn btn-primary">Book</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-1 col-md-4 col-lg-4">
                <div className="card">
                    <img src={tourImg} className="card-img-top" alt="Tour" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tour;