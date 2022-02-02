import React from "react";

function Search() {
  const input = React.useRef();

  const searchItem = (event, onSearch) => {
    console.log(input.current.value);
  };

  return (
    <div>
      Поиск
      <input ref={input} />
      <button onClick={searchItem}>Поиск</button>
    </div>
  );
}

export default Search;
