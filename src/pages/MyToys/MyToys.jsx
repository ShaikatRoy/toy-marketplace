import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/toys?email=${user?.email}`;
     useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
     }, [])
    return (
        <div>
            <h1>This Is My Toys Page</h1>
            <div>
            <div className="overflow-x-auto w-full">
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
                            <th>View Details button</th>
                        </tr>
                    </thead>
                    <tbody>
                    {myToys.map(myToy => (
                                <MyToysRow
                                key={myToy.key}
                                myToy={myToy}
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