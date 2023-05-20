import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, [])

    return (
        <div>
            <h1>This Is ALL Toys Page</h1>
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
                       {
                           allToys.map(allToy => <AllToysRow
                                key={allToy.key}
                                allToy={allToy}
                           ></AllToysRow>)
                       }
                     </tbody>
                </table>
            </div>
                
            </div>
        </div>
    );
};

export default AllToys;