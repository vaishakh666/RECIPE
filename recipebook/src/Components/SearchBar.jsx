import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
