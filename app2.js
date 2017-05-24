var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

var arr = [];

arr.push(function() {
    console.log('HW1');
});

arr.push(function() {
    console.log('HW2');
});

arr.push(function() {
    console.log('HW3');
});

arr.forEach(function(item) {
    item();
});