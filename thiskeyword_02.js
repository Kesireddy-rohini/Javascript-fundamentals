

let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'dell',

    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);

    },
    greet: function(){
        console.log(this.cpu);

    }
}


let laptop2 = {
    cpu: 'i2',
    ram: 8,
    brand: 'hp',

    greet: function(){
        console.log(this.cpu);

    }
}


laptop1.compare(laptop2);
