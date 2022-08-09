import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 3) return;
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ onInputChange }
        />
        <small className="text-legend">Por ejemplo: Batman, Spiderman, Goku ...</small>
      </form>
    </>
  );
};
