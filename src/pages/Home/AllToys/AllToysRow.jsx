import { Link } from "react-router-dom";

const AllToysRow = ({allToy}) => {

    const { _id, userName, toyName, photo, subCategory, price, quantity  } = allToy;

    return (
        <tr>
            <td>
        <div className="avatar">
                <div className="rounded w-36 h-28">
                    {photo && <img src={photo} alt="Avatar Tailwind CSS Component" className="object-contain" />}
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
        <td>${quantity}</td>
        <td>
         <Link to={`/details/${_id}`}>
             <button className="btn btn-primary">View Details</button>
         </Link>
        </td>
    </tr>
    );
};

export default AllToysRow;