import React from 'react';
import { useHistory } from 'react-router';

const Tour = (props) => {
    const { id, destination, rate, price, desImg, desc } = props.tour;
    const history = useHistory();
    const handleBook = () => {
        history.push(`tour/${id}`)
    };
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
                <img src={desImg} className="card-img-top" alt="Tour" />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">${price} / Per Person</h5>
                        <h6>{rate}k+ Rating</h6>
                    </div>
                    <h2 className=" text-warning">{destination}</h2>
                    <p className="card-text">{desc}</p>
                    <button onClick={handleBook} className="btn btn-primary">Book</button>
                </div>
            </div>
        </div>
    );
};

export default Tour;