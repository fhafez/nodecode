var obj = {
    name: 'fadi hafez',
    greet: function() {
        console.log(`hello ${this.name}`);
    }
}

obj.greet();

obj.greet.call({name:'jane doe'});

obj.greet.apply({name:'jane doe'});