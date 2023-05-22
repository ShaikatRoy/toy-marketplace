import { Link } from "react-router-dom";

const AllToysRow = ({allToy}) => {

    const { _id, userName, toyName, photo, subCategory, price, quantity  } = allToy;

    return (
        <tr>
            <td>
        <div>
                <div >
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
         <Link to={`/details/${_id}`}>
             <button className="btn btn-primary">View Details</button>
         </Link>
        </td>
    </tr>
    );
};

export default AllToysRow;