import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const toy = useLoaderData();
    const { photo, toyName, userName, email, subCategory, price, rating, quantity, description } = toy;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>Brand: {subCategory}</p>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
// picture, toy name, seller name, seller email, price, rating, available quantity, and detail description