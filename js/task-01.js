const categoriesList = document.querySelector(`#categories`);

console.log(`Number of categories:`,categoriesList.children.length);

const categoriesItem = categoriesList.querySelectorAll(`.item`);

categoriesItem.forEach(function (el) {
    const categoryTitle = el.querySelector(`h2`);
    const categoryElements = el.querySelector(`ul`);
    
    console.log(`Category: `, categoryTitle.textContent);
    console.log(`Elements: `, categoryElements.children.length)

} );