import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";

const Home = () => {
  const APP_ID = "7087351d";
  const APP_KEY = "15b6346bbd0e26b6feec64ee4975e6bb";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  const getData = async () => {
    const { data } = await axios(url);
    // console.log(data.hits);
    setRecipes(data.hits);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header setQuery={setQuery} />
    </div>
  );
};

export default Home;
