
let alien ={
    name: 'Rohini',
    tech:'javascript',
    'work exp': 4,
    laptop:{
        cpu:'i7',
        ram: 6,
        brand:'dell'
    }
}

console.log(alien.laptop);
console.log(alien.laptop.brand);
console.log(alien.laptop.brand.length);
console.log(alien.laptop?.brand?.length); 

delete alien.laptop
console.log(alien)