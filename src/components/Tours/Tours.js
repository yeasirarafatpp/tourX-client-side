import { useEffect, useState } from "react";
import Tour from "../../Tour/Tour";


const Tours = () => {
    const [allTours, setAllTours] = useState([]);
    useEffect(() => {
        fetch('https://boiling-cove-04802.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setAllTours(data))
    }, []);

    return (
        <div className="container">
            <h2 className="text-center fw-bolder fs-1 py-5">Select Your Best Package <br /> For Your Travel</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    allTours.map(tour => <Tour key={tour.id}
                        tour={tour}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;