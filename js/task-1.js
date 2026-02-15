const categories = document.querySelector("#categories");
const categoriesList = categories.querySelectorAll(".item")

console.log(`Number of categories: ${categoriesList.length}`);

for (let elem of categoriesList) {
    const title = elem.querySelector("h2").textContent;
    
    const list = elem.querySelector("ul");
    const listCount = list.querySelectorAll("li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${listCount}`);
}
