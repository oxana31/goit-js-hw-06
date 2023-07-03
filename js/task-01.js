const ulElement = document.querySelector("#categories");

const itemElements = document.querySelectorAll('.item');

console.log("Number of categories: ", itemElements.length);

itemElements.forEach((item) => {   
const title = item.querySelector("h2"); 
const elements = item.querySelectorAll("li");
console.log("Category: ", title.textContent)

console.log("Elements:", elements.length);

})
