import React from "react";

function Search() {
  const [searchItems, setSearchItems] = React.useState("");

  return <div>{searchItems}</div>;
}

export default Search;
