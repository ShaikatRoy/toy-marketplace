/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const url = `http://localhost:5000/toys?email=${user?.email}&sort=${sortOrder}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, [sortOrder, user]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete'); //use sweet alert
        if (proceed) {
            fetch(`http://localhost:5000/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }

                })
        }
    }
    
    
    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-6">Your Toys</h1>
            <div>
                <div className="overflow-x-auto w-full">
                <button className="btn btn-primary mx-auto" onClick={toggleSortOrder}>Sort Order</button>

                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>UserName</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Delete Button</th>
                                <th>View Details button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myToys.map((myToy) => (
                                <MyToysRow
                                    key={myToy.key}
                                    myToy={myToy}
                                    handleDelete={handleDelete}
                                ></MyToysRow>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyToys;