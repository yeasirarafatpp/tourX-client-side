import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const SingleTour = () => {
    const { tourId } = useParams();
    useEffect(() => {
        const url = `https://boiling-cove-04802.herokuapp.com/tours/${tourId}`;
        fetch('url')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div className="container">
            <h2>This is details page {tourId}</h2>
            <p>Local api theke dynamic route hocchena</p>
        </div>
    );
};

export default SingleTour;