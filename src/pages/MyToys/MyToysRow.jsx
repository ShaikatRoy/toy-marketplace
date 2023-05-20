import { Link } from "react-router-dom";

const MyToysRow = ({myToy}) => {
    const { _id, userName, toyName, photo, subCategory, price, quantity  } = myToy;

    return (
        <tr>
            <td>
        <div className="avatar">
                <div className="rounded w-36 h-28">
                    {photo && <img src={photo} alt="Avatar Tailwind CSS Component" className="" />}
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

export default MyToysRow;