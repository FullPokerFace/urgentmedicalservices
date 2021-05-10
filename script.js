const burgerMenu = document.querySelector('.burger-menu');
const navLinksContainer = document.querySelector('.nav-links-container');

// Function to Toggle element.display Property
const toggleDisplay = (e, toggleOff = false) => {
    const display =
        window.getComputedStyle(e).display === 'none' && !toggleOff ?
            'flex' : 'none';
    e.style.display = display;
}





const burgerMenuPos = () => {

    const burgerMenuCoords = burgerMenu.getBoundingClientRect();
    const bottomPoint = burgerMenuCoords.height + burgerMenuCoords.y;
    const rightPoint = burgerMenuCoords.width + burgerMenuCoords.x;

    return (
        {
            bottom: bottomPoint + 'px',
            right: rightPoint + 'px',
        }
    )
}

const positionMobileMenu = () => {
    navLinksContainer.style.top = burgerMenuPos().bottom;
    navLinksContainer.style.right = '0px';
}

window.onresize = () => {
    positionMobileMenu();
    navLinksContainer.style.display = 'flex';
}

window.onclick = () => {
    if (window.getComputedStyle(burgerMenu).display !== 'none') {
        toggleDisplay(navLinksContainer, true);
    }
}

burgerMenu.addEventListener('click', (e) => {
    toggleDisplay(navLinksContainer);
    e.stopPropagation();
})

positionMobileMenu();


document.getElementById('year').innerHTML = new Date().getFullYear();











