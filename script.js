function renderSnowContainer () {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';

    document.body.appendChild(snowContainer);

    return snowContainer;
}

const flakeImages = [
    'images/flakes/flake.png',
    'images/flakes/flake2.png',
    'images/flakes/flake3.png'
]

function renderFlake (snowContainer) {
    const flakeContainer = document.createElement('div');
    flakeContainer.classList.add('flake-container');

    flakeContainer.style.left = `${Math.random() * 100}%`
    flakeContainer.style.transform = `scale(${Math.random()})`

    const img = document.createElement('img');
    img.src = flakeImages[Math.floor(Math.random() * flakeImages.length)];

    flakeContainer.appendChild(img);
    snowContainer.appendChild(flakeContainer);

    setTimeout(renderFlake, 500, snowContainer);

}

const snowContainer = renderSnowContainer();
renderFlake(snowContainer);


