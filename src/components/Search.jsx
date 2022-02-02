import React from "react";

function Search({ onSearch, items }) {
  const input = React.useRef();

  const searchItem = (name) => {
    // console.log(input.current.value);
    // console.log(onSearch);
    // input.current.value = input;

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
