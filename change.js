var d = (function change(b) {
    console.log(b);
    b.a = 3;
    b.c = 'abc';

    return this;
})(12);

var a = {'a': 1};
d.change(a);
console.log(a);