import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">₹100-1000</option>
              <option value="2">₹1001-2000</option>
              <option value="3">₹2001-3000</option>
              <option value="4">₹3001-5000</option>
              <option value="5">₹5001-10000</option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
