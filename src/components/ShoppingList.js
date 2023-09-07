import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
// import { v4 as uuid } from "uuid";

function ShoppingList({onFilter, items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchedInput,setSearchedInput]=useState("")

  const [shoppingItems, setShoppingItems] = useState([]); 


  function onItemFormSubmit(newItem) {
    setShoppingItems([...shoppingItems, newItem]);
  }
 


  function handleCategoryChange(event) {

   
    setSelectedCategory(event.target.value);
    
  }
function handleSearch(e){
  const text = e.target.value;

  setSearchedInput(text);
  onFilter(text);

  }
  const allItems = [...items, ...shoppingItems];
  
  const itemsToDisplay = allItems.filter((item) => {
    if (selectedCategory === "All") return true;
      

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm   onItemFormSubmit={onItemFormSubmit}/>
    
      <Filter searchedInput={searchedInput} onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
