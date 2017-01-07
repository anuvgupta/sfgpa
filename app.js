var block = Block('div', 'app');
var scale = {
    'A': 4,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'F': 0,
    order: [ 'F', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A' ]
};
var grades = [];
for (var i = 0; i < 7; i++) grades.push({
    grade: 10,
    ap: false
});
function updateGPA() {
    var newGPA = 0;
    for (var g in grades) {
        var grade = grades[g];
        newGPA += scale[scale.order[grade.grade]];
        if (grade.ap === true) newGPA++;
    }
    newGPA /= grades.length;
    newGPA = newGPA.toFixed(2);
    block.data({ 'gpa': newGPA });
    return newGPA;
}
block.load(function (b) {
    setTimeout(function () {
        b.fill(document.body);
        Block.queries();
    }, 500);
}, 'app', 'jQuery');
