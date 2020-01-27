function showTopButton() {
  document.getElementById('topButton').style.display = 'block';
}
function hideTopButton() {
  document.getElementById('topButton').style.display = 'none';
}

window.onscroll = function() {
    if(window.scrollY > 300) {
        showTopButton();
    } else {
        hideTopButton();
    }
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

document.getElementById('topButton').addEventListener('click', scrollToTop);
