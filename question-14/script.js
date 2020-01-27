window.onscroll = function() {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showLoader();
        setTimeout(() => {
            hideLoader();
            addboxes();
        }, 2000);
    }
}

function showLoader() {
    document.getElementById('Loader').style.display = 'block';
}
function hideLoader() {
    document.getElementById('Loader').style.display = 'none';
}
function addboxes() {
    for(let i = 1; i < 6; i++) {
        let div = document.createElement('div');
        div.className = `box${i}`;
        document.getElementById('boxContainer').appendChild(div);
    }
    
}