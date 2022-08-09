import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if( categories.includes( newCategory ) ) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div className="app">
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={ onAddCategory } />
        {
          categories.map((category) => (
            <GifGrid 
                key={category}
                category={category} />
          ))
        }
      </div>
      
      <div className="footer">Desarrollado por @dev.danieladayro</div>
    </>
  );
};
