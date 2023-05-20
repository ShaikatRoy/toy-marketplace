import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const toy = useLoaderData();
    const { photo, toyName, userName, email, subCategory, price, rating, quantity, description } = toy;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl ">
            <figure className=""><img src={photo} alt="Album" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{toyName}</h2>
                <p >Brand: <span className="font-semibold">{subCategory}</span></p>
                <p>Seller Name: {userName}</p>
                <p>Contact: {email}</p>
                <p>Price: {price}$</p>
                <p>Rating: {rating}</p>
                <p>Available quantity: {quantity} </p>
                <p>About: {description}</p>
            </div>
        </div>
    );
};

export default DetailsPage;