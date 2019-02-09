'use strict';

var panels = document.querySelectorAll(".panel");

function addOpen() {
    this.classList.add('open');
    this.classList.add('open-active');
}

function removeOpen() {
    this.classList.remove('open');
    this.classList.remove('open-active');
}

panels.forEach(function (panel) {
    return panel.addEventListener('mouseover', addOpen);
});
panels.forEach(function (panel) {
    return panel.addEventListener('mouseout', removeOpen);
});
