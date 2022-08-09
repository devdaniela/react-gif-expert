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
      <h1 className="nav">GifExpertApp</h1>
      <div className="container">
        <AddCategory onNewCategory={ onAddCategory } />
        {
          categories.map((category) => (
            <GifGrid 
                key={category}
                category={category} />
          ))
        }
      </div>

      <div className="footer">
        Desarrollado por <a href="https://github.com/devdaniela/react-gif-expert" target="_blanlk">@devdaniela </a>
      </div>
    </>
  );
};
