
const AllToysRow = ({allToy}) => {

    const { userName, toyName, photo, subCategory, price, quantity  } = allToy;

    return (
        <tr>
            <td>
        <div className="avatar">
                <div className="rounded w-36 h-28">
                    {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
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
          <button className="btn btn-primary">View Details</button>
        </td>
    </tr>
    );
};

export default AllToysRow;