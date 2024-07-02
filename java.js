const zoomScreen = document.querySelector(".Container");

let zoom = 1;
let zoomSpeed = 0.1;

document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        zoomScreen.style.transform = `scale(${(zoom += zoomSpeed)})`;

    }
    else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomSpeed)})`;

    }
});