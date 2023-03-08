import React, { useState } from "react";
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div id="mainbox">
    <div className="DietApp">
      <section className="controls">
        <h1 id="headtag">Calorie Specific Diet</h1>
        <input id="searchbox"
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button id="searchbutton" onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
    </div>
  );
}

export default App;
