
let laptop1 = {
    cpu: 'i7',
    ram: 16,
    brand: 'dell',

    greet: function(){
        console.log(this.cpu);

    }
}


let laptop2 = {
    cpu: 'i9',
    ram: 8,
    brand: 'hp',

    greet: function(){
        console.log(this.cpu);

    }
}

laptop1.greet();