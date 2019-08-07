
function renderNametags(nametags) {
    let divs = nametags.map(function(name, index, originalArray){
        return `
        <div class="nametag">
            <div class="nametag-header">Hello, my name is:</div>
            <div class="nametag-main">${name}</div>
        </div>
        `
    })

    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(nametags)}</code>
            ${divs.join('')}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}