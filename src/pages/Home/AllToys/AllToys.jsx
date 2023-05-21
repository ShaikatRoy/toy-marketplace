import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data.slice(0, 20));
        setFilteredToys(data.slice(0, 20));
      });
  }, []);

  const handleSearch = () => {
    const filteredToys = allToys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Our Toys</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="w-full p-2 border rounded me-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Picture</th>
              <th>User Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((allToy) => (
              <AllToysRow key={allToy._id} allToy={allToy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
