import React, { useEffect, useState } from "react";
import "./Category.css";
import CategoryDetails from "./CategoryDetails";
const Category = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("/Category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="container mt-5">
      <h3 className="text-center fw-bold">Job Category List</h3>
      <p className="text-center text-secondary">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="row mt-5 mb-5">
        {categorys.map((category) => (
          <CategoryDetails
            category={category}
            key={category._id}
          ></CategoryDetails>
        ))}
      </div>
    </div>
  );
};

export default Category;
