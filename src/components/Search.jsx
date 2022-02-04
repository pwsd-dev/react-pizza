import React from "react";

function Search({ onSearch, activeSearch, items }) {
  const input = React.useRef();

  // findActiveSearch = items.find((obj) => obj.name === activeSearch).name;

  // console.log(findActiveSearch);

  const searchItem = (name) => {
    // console.log(input.current.value);
    // console.log(onSearch);
    // input.current.value = input;

    name = input.current.value;

    onSearch(name);

    // console.log(input);
  };

  return (
    <div>
      <input ref={input} />
      <button onClick={searchItem}>Поиск</button>
    </div>
  );
}

export default Search;
