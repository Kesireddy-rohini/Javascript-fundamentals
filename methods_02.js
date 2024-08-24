
function getFasterLaptop(laptop1,laptop2){

    if(laptop1.cpu>laptop2.cpu){
        console.log(laptop1);
    }
    else{
        console.log(laptop2)
    }
    }



let laptop1 = {
    cpu: 'i7',
    ram: 16,
    brand: 'dell',

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

getFasterLaptop(laptop1,laptop2);

