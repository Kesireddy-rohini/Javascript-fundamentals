
// constructor
function Alien(name, tech){
    this.name=name;
    this.tech=tech;

    //method

this.work = function(){
    console.log("Hello World");
}
}

let alien1 = new Alien("Rohini" , "java");
let alien2 = new Alien("Kesireddy" , "DevOps");

alien1.tech="databases";

console.log(alien1);
console.log(alien2);
alien2.work();