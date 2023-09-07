import React ,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [formData,setFormData]=useState(
    {
name:"",
category:"Produce"


  })
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    };

  
    onItemFormSubmit(newItem);

    setFormData({
      name: "",
      category: "Produce"
    });
  }

  return (
    <form  onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input  value={formData.name} onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select   value={formData.category} onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
