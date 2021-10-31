import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const SingleTour = () => {
    const { user } = useAuth();
    const { tourId } = useParams();
    const [tour, setTour] = useState({});
    useEffect(() => {
        const url = `https://boiling-cove-04802.herokuapp.com/tours/${tourId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [tourId]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://boiling-cove-04802.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Received.')
                }
            })
            .catch(err => {
                console.log(err)
            })
        reset();
    };

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


                    {/* Bootstrap react hook form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input {...register("RegEmail")} type="email" value={user.email} className="form-control" placeholder="Email" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputText" className="form-label">Name</label>
                            <input {...register("FullName")} value={user.displayName} placeholder="Name" type="text" className="form-control" id="inputText" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input {...register("UserAddress")} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputDestination" className="form-label">Destination</label>
                            <input {...register("destination")} type="text" className="form-control" id="inputDestination" value={tour.destination} placeholder="1234 Main St" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input {...register("UserCity")} type="text" placeholder="City" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input {...register("UserZip")} type="text" placeholder="Zip Code" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputRate" className="form-label">Zip</label>
                            <input {...register("rate")} value={tour.rate} type="text" placeholder="Rating" className="form-control" id="inputRate" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputPrice" className="form-label">Zip</label>
                            <input {...register("price")} value={tour.price} type="text" placeholder="Price" className="form-control" id="inputPrice" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Complete Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleTour;