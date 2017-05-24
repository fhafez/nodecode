function greet(callback) {

    console.log('hello');

    var data = {
        name: 'fadi hafez'
    }

    callback(data);

}

greet(function(data) {

    console.log('here we are ' + data.name);

});

greet(function(data) {
    console.log('again! ' + data.name);
});