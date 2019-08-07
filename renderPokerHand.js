
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder

    let imgs = pokerHand.map(function(img){
        console.log(img)
        return `
            <div class="pokercards">
                <img src="cards/${img.value}${img.suit}.png">
            </div>
        `
    })
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(pokerHand)}</code>
            <div class="pokerhands">${imgs.join('')}</div>
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}