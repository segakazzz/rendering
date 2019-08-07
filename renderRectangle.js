
function renderRectangle(rectangle) {
    let style = `width:${rectangle.width}px; height:${rectangle.height}px; background-color:${rectangle.color}; margin:auto`
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(rectangle)}</code>
            <div style="${style}"></div>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}