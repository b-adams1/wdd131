import recipes from "./recipes.mjs"

function random(num) {
	return Math.floor(Math.random() * num);
};

function randomRecipe(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum]
};

function recipeTemplate(recipe) {
    return `<figure class="item">
        <img src="${recipe.image}" alt="${recipe.name}">
        <figcaption class="details">
            <ul class="tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2 class="name">
                ${recipe.name}
            </h2>
            <p>
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`
};

function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    return tags.map(tag => `<li>${tag}</li>`).join("");
};

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i=1; i<=5; i++) {
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= Math.floor(rating)) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
		// else output an empty star
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    };
	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
};

function renderRecipes(recipe) {
	// get the element we will output the recipes into
    const main = document.querySelector("main")
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const chosenRecipe = recipeTemplate(recipe)
	// Set the HTML strings as the innerHTML of our output element.
    main.insertAdjacentHTML("beforeend", chosenRecipe)
};

renderRecipes(randomRecipe(recipes))