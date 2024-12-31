import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Pizza",
    price: "",
  });

  const onchnageHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={submitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload image of the product </p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
            />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onchnageHandler}
            value={data.name}
            type="text"
            name="name"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onchnageHandler}
            value={data.description}
            name="description"
            id=""
            placeholder="write desc here"
            rows={6}
          ></textarea>
        </div>

        <dev className="add-category-price">
          <div className="add-category flex-col">
            <p>product Category</p>
            <select
              onChange={onchnageHandler}
              value={data.category}
              name="category"
              id=""
            >
              <option value="Desert">Desert</option>
              <option value="Salade">Salade</option>
              <option value="Sandwitch">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Drinks">Drinks</option>
              <option value="Pizza">Pizza</option>
              <option value="Shake">Shake</option>
            </select>
          </div>
          <dev className="add-price flex-col">
            <p>add price</p>
            <input
              onChange={onchnageHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$10"
            />
          </dev>
        </dev>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
