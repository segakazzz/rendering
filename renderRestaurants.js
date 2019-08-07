
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards

    let divs = restaurants.map(function(restaurant){
        console.log(restaurant)
        return `
        <div class="restaurant">
            <h2>${restaurant.name}</h2>
            <h6>${restaurant.type}</h6>
            <span>${'$'.repeat(restaurant.priceRating)}</span>
        </div>
        `
    })
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(restaurants)}</code>
            <div id="restaurants">${divs.join('')}</div>
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}