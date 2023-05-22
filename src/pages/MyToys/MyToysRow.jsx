import { Link } from "react-router-dom";

const MyToysRow = ({ myToy, handleDelete }) => {
    const { _id, userName, toyName, photo, subCategory, price, quantity } = myToy;

   
    return (
        <tr>
            <td>
                <div >
                    <div>
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" className="w-20 h-28 object-scale-down" />}
                    </div>
                </div>
            </td>
            <th>
                {userName}
            </th>

            <th>
                {toyName}
            </th>

            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </Link>
            </td>
            <td>
                <Link to={`/updateToy/${_id}`} >
                    <button className="btn btn-primary">Update Details</button>
                </Link>
            </td>
        </tr>

        
    );
};

export default MyToysRow;