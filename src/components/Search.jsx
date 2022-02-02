import React from "react";

function Search({ onSearch }) {
  const input = React.useRef();

  const searchItem = () => {
    console.log(input.current.value);
    console.log(onSearch);
  };

  return (
    <div>
      <input ref={input} />
      <button onClick={searchItem}>Поиск</button>
    </div>
  );
}

export default Search;
