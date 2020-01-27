function highlightbold () {
    let elements = document.querySelectorAll('strong');

    for (element of elements) {
        element.style.backgroundColor = 'yellow';
    }
}

function removehighlightbold () {
    let elements = document.querySelectorAll('strong');

    for (element of elements) {
        element.style.backgroundColor = 'transparent';
    }
}
