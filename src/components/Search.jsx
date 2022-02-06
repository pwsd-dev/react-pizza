import React from "react";

function Search({ onSearch }) {
  const input = React.useRef();

  const searchItem = (name) => {
    name = input.current.value;

    onSearch(name);
  };

  return (
    <div className="search">
      <input ref={input} />
      <button onClick={searchItem}>Поиск</button>
    </div>
  );
}

export default Search;
