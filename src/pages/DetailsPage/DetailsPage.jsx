import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const toy = useLoaderData();
  const { photo, toyName, userName, email, subCategory, price, rating, quantity, description } = toy;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" className="lg:h-50 lg:w-96 object-contain p-5 ms-10" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{toyName}</h2>
        <p>Brand: <span className="font-semibold">{subCategory}</span></p>
        <p>Seller Name: {userName}</p>
        <p>Contact: {email}</p>
        <p>Price: <span className="font-bold">{price}$</span></p>
        <p>Rating: {rating}</p>
        <p>Available quantity: {quantity}</p>
        <p><span className="font-semibold">About:</span> {description}</p>
        <div className="mt-4">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
