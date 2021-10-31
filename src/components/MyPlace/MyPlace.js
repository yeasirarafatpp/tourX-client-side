import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyPlace = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://boiling-cove-04802.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const handleDelete = id => {
        window.confirm('Are You Sure?');
        if (true) {
            const url = `https://boiling-cove-04802.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Successfully Deleted');
                        const remain = orders.filter(order => order._id !== id);
                        setOrders(remain);
                    }
                })
        }
    }
    return (
        <div className="container py-5">
            <h2>Here I can see my all destination</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Destination</th>
                        <th scope="col">Price</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.filter(order => order.RegEmail === user.email).map(item => (
                            <tr key={item._id}>
                                <td>{item.destination}</td>
                                <td>{item.price}</td>
                                <td>{item.rate}</td>
                                <td><button onClick={() => handleDelete(item._id)} className="btn btn-primary">Cancel</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPlace;