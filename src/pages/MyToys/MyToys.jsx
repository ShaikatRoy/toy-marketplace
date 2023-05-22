/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from 'sweetalert2';
import useTitle from "../../hocks/useTitle";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    useTitle('Mytoys')

    useEffect(() => {
        const url = `https://figure-mania-server.vercel.app/toys?email=${user?.email}&sort=${sortOrder}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, [sortOrder, user]);

    const handleDelete = id => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You are about to delete the toy',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6'
        }).then(result => {
          if (result.isConfirmed) {
            fetch(`https://figure-mania-server.vercel.app/toys/${id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'The toy has been deleted.',
                    'success'
                  );
                  const remaining = myToys.filter(myToy => myToy._id !== id);
                  setMyToys(remaining);
                }
              })
              .catch(error => {
                console.error(error);
              });
          }
        });
      };
    
    
    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold text-center mb-3">Your Toys</h1>
            <div>
                <div className="overflow-x-auto w-full">
                <div className="flex items-center my-5">
                <button className="btn btn-primary mx-auto" onClick={toggleSortOrder}>Sort Order</button>
                </div>

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