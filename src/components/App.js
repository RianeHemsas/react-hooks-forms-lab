import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  // const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [originalData, setOriginalData] = useState(itemData);
  const [items, setItems] = useState(originalData);



  const handleFilter = (text) => {
    // Filter the list of items based on the search text
    const filteredItems = originalData.filter((item) =>
      item.name.toLowerCase().includes(text)
      // item.name.charAt(0) === text
    );
    setItems(filteredItems);
  };
 

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList onFilter={handleFilter} items={items} />
    </div>
  );
}

export default App;
