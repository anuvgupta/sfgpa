var server = 'http://count.sfgpa.anuv.me/';
var block = Block('div', 'app');

// gpa calculator
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
    block.data({ gpa: newGPA });
    return newGPA;
}

// final grade calculator
var mode = 'need';
var finalworth = 15;
var currentgrade = 98;
var classgrade = 92.5;
var finalgrade = 0;
function updateFinals() {
    var examworth = finalworth / 100;
    if (mode == 'need') {
        finalgrade = (classgrade + currentgrade * examworth - currentgrade) / examworth;
        block.data({ finals: finalgrade });
    } else if (mode == 'took') {
        classgrade = examworth * finalgrade + (1 - examworth) * currentgrade;
        block.data({ finals: classgrade });
    }
}

// load block
block.load(function (b) {
    setTimeout(function () {
        b.fill(document.body);
        Block.queries();
    }, 500);
}, 'app', 'jQuery');
