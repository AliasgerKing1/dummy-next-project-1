"use client";
import { addProduct } from "@/services/Product.service";
import { useState } from "react";

const AddProduct = () => {
    const [requestData, setRequestData] = useState({
        name: "",
        price: "",
      });
    
      let handleAddProduct = async () => {
        let response = await addProduct(requestData);
        console.log(response)
        if (response.status === 201) {
          alert("Product added successfully");
        } else {
          alert("Failed to add user");
        }
      };
  return (
    <>
    <h1>Add products</h1>
    <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={requestData.name}
          onChange={(e) =>
            setRequestData({ ...requestData, name: e.target.value })
          }
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Price"
          value={requestData.price}
          onChange={(e) =>
            setRequestData({ ...requestData, price: e.target.value })
          }
        />
        <br />
        <br />
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </>
  )
}

export default AddProduct