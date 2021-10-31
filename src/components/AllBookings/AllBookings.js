import React, { useEffect, useState } from 'react';

const AllBookings = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://boiling-cove-04802.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    return (
        <div className="container">
            <h2>Here is all bookings</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Destination</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(item => (
                            <tr key={item._id}>
                                <td>{item.destination}</td>
                                <td>{item.RegEmail}</td>
                                <td>{item.FullName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBookings;