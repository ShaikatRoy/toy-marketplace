import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  const uniqueSubCategories = [...new Set(categories.map((category) => category.subCategory))];

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
      <h2 className="text-center text-3xl my-10 font-bold"  data-aos="fade-right">Shop by Category</h2>
      <TabList className="tabs flex justify-center">
        {uniqueSubCategories.map((subCategory) => (
          <Tab className=' btn py-2 px-5 mx-3 rounded-lg'  key={subCategory}>{subCategory}</Tab>
        ))}
      </TabList>

      {uniqueSubCategories.map((subCategory) => (
        <TabPanel key={subCategory}>
          <div className="card-grid grid grid-cols-3">
            {categories
              .filter((item) => item.subCategory === subCategory)
              .map((toy) => (
                <div className="card shadow-lg mt-5" key={toy._id}>
                  <figure>
                    <img src={toy.photo} alt={toy.toyName} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.toyName}</h2>
                    <p>{toy.price}</p>
                    <p>{toy.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/details/${toy._id}`}>
                      <button className="btn btn-primary">View Details</button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Category;
