import React, { useState } from "react";
import SearchListItem from "./SearchListItem";

const SearchList = () => {
  const [searchList, setSearchList] = useState([
    { id: 1, name: "Canon D600" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
    { id: 12, name: "pro" },
  ]);
  return (
    <div className="mt-12 max-h-[450px] overflow-auto">
      {searchList.map((item) => {
        return <SearchListItem items={item} key={item.id} />;
      })}
    </div>
  );
};

export default SearchList;
