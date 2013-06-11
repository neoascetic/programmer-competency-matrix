(function(body) {

var STORAGE_KEY = 'matrix';
var CHECKED_CLASS = 'checked';
var CELLS = body.querySelectorAll('td:not(:first-child):not(:last-child)');

var matrix = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (!matrix) {
    matrix = [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(matrix));
}
Array.prototype.map.call(CELLS, function(cell, index) {
    if (matrix[index]) cell.classList.add(CHECKED_CLASS);
});

body.addEventListener('click', function(e) {
    if (!e.target ||
        e.target.tagName !== 'TD' ||
        e.target.cellIndex < 1 ||
        e.target.cellIndex > 4) return;
    var cell = e.target;

    cell.classList.toggle(CHECKED_CLASS);

    var index = Array.prototype.indexOf.call(CELLS, cell);
    var matrix = JSON.parse(localStorage.getItem(STORAGE_KEY));
    matrix[index] = cell.classList.contains(CHECKED_CLASS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(matrix));
});

})(document.getElementsByTagName('body')[0]);
