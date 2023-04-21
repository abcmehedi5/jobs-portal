import React from "react";
const CategoryDetails = ({ category }) => {
    const{available, name, image ,} = category
    console.log(image);
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
         <img className="img img-fluid" src={image} alt="icon" />
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-secondary">{available} Jobs Available</p>

        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
