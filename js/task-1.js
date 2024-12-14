const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    const categoryHeader = category.querySelector("h2");
    const categoryItems = category.querySelectorAll("li");
    console.log(`Category: ${categoryHeader.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);
});