
window.addEventListener('load', initAll);


function initAll() {
    btnSwith('#nav-search-btn', '#nav-search')
}

function btnSwith(btn, obj) {
    let button = document.querySelector(btn);
    let toDisplayElement = document.querySelector(obj);

    if (toDisplayElement && button) {
        button.addEventListener('click', () => {
            button.classList.toggle("active");
            toDisplayElement.classList.toggle("active");
        });
    } else {
        console.log(`${obj} is toDisplayElement: ${toDisplayElement}`);
    }
}
