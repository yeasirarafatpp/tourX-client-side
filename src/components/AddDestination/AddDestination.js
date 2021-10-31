import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDestination = () => {
    const [newDestination, setNewDestination] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        setNewDestination(data);
        axios.post('https://boiling-cove-04802.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Destination Successfully Added.')
                }
            })
            .catch(err => {
                console.log(err)
            })
        reset();
    };
    return (
        <div className="container py-5">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputText" className="form-label">Destination Name</label>
                    <input {...register("destination")} placeholder="Name" type="text" className="form-control" id="inputText" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Image Link</label>
                    <input {...register("desImg")} type="text" className="form-control" placeholder="Image Link" id="inputEmail4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Details</label>
                    <textarea {...register("desc")} className="form-control" id="inputAddress" placeholder="Details about destination" cols="30" rows="5"></textarea>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Rating</label>
                    <input {...register("rate")} type="text" placeholder="Rating" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Price</label>
                    <input {...register("price")} type="number" placeholder="Price" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Destination</button>
                </div>
            </form>
        </div>
    );
};

export default AddDestination;