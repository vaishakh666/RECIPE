import React, { useState, useEffect, useCallback, useMemo } from 'react';
import RecipeList from './Components/RecipeList';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import './App.css'; 

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/src/assets/Data/recipes.json');
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const handleSearch = useCallback((item) => {
    setSearchTerm(item);
  }, []);

  const handleFilter = useCallback((cuisine) => {
    setCuisineFilter(cuisine);
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (cuisineFilter ? recipe.cuisine === cuisineFilter : true)
    );
  }, [recipes, searchTerm, cuisineFilter]);

  return (
    <div>
      <h1>Recipe Book</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default App;
