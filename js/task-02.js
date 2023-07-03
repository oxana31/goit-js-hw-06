const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainerEl = document.querySelector("ul#ingredients");

const ingredientItem = ingredients.map((ingredient) =>  {
  const item = document.createElement("li");
  item.textContent = ingredient
  item.classList.add("item")
  return item
});

// console.log(ingredientItem);


ingredientsContainerEl.append(...ingredientItem)
console.log(ingredientsContainerEl);
