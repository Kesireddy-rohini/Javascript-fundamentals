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

// for(let key in alien){
//     console.log(key , alien[key]);
   
// }

for(let key in alien.laptop){
    console.log(key, alien.laptop[key]);
}