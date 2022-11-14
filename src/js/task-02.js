const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

console.log(ingredientsEl);
console.log(ingredients);

const listEls = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add("item");
  return listEl;
});

ingredientsEl.append(...listEls);
