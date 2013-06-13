(function(body) {

var CELLS_PER_ROW = 4;
var STORAGE_KEY = 'matrix';
var CHECKED_CLASS = 'checked';
var CELLS = body.querySelectorAll('td:not(:first-child):not(:last-child)');

body.addEventListener('click', function(e) {
    var cell = e.target || [];
    var cellIndex = Array.prototype.indexOf.call(CELLS, cell);
    if (cellIndex === -1) return;

    cell.classList.toggle(CHECKED_CLASS);

    var isCellChecked = cell.classList.contains(CHECKED_CLASS);

    var siblingGetterAction = isCellChecked ?
        ['previousElementSibling', 'add'] :
        ['nextElementSibling', 'remove'];
    var sibling = cell[siblingGetterAction[0]];
    while (sibling) {
        sibling.classList[siblingGetterAction[1]](CHECKED_CLASS);
        sibling = sibling[siblingGetterAction[0]];
    }

    var matrix = JSON.parse(localStorage.getItem(STORAGE_KEY));
    var rowIndex = Math.floor(cellIndex / CELLS_PER_ROW);
    var relativeCellIndex = cellIndex % CELLS_PER_ROW;
    if (isCellChecked) {
        matrix[rowIndex] = relativeCellIndex;
    } else if (relativeCellIndex !== 0) {
        matrix[rowIndex] = relativeCellIndex - 1;
    } else {
        delete matrix[rowIndex];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(matrix));
});

var matrix = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (!matrix) {
    matrix = [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(matrix));
}
Array.prototype.map.call(matrix, function(maxCheckedCellRelativeIndex, rowIndex) {
    if (maxCheckedCellRelativeIndex !== null) {
        CELLS[rowIndex * CELLS_PER_ROW + maxCheckedCellRelativeIndex].click();
    }
});


})(document.getElementsByTagName('body')[0]);
