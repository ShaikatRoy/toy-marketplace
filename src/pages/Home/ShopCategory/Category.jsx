import { useEffect, useState } from "react";
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
      <h2 className="text-center font-bold">Shop by Category</h2>
      <TabList className="tabs tabs-boxed flex justify-center"> {/* Added 'flex' and 'justify-center' classes */}
        {uniqueSubCategories.map((subCategory) => (
          <Tab key={subCategory}>{subCategory}</Tab>
        ))}
      </TabList>

      {uniqueSubCategories.map((subCategory) => (
        <TabPanel key={subCategory}>
          <div className="card-grid grid grid-cols-3"> {/* Added 'grid' and 'grid-cols-3' classes */}
            {categories
              .filter((item) => item.subCategory === subCategory)
              .map((toy) => (
                <div className="card" key={toy._id}>
                  <figure>
                    <img src={toy.photo} alt={toy.toyName} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.toyName}</h2>
                    <p>{toy.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
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
