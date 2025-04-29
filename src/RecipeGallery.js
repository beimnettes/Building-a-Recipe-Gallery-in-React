import React from 'react';
import './RecipeGallery.css'; // (for optional styling)

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
    image: "https://example.com/carbonara.jpg",
  },
  {
    id: 2,
    title: "Chicken Alfredo",
    ingredients: ["Pasta", "Chicken", "Cream", "Parmesan"],
    image: "https://example.com/alfredo.jpg",
  },
  {
    id: 3,
    title: "Greek Salad",
    ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Feta Cheese"],
    image: "https://example.com/greek-salad.jpg",
  },
];

function RecipeGallery() {
  return (
    <div className="gallery">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeGallery;
