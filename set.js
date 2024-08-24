

let num =new Set();

num.add(9);
num.add("rohini");
num.add(8);
num.add(9);
num.add("kesireddy");
num.add(4);

num.forEach(n=>{
    console.log(n);
})

console.log(num.has(3)); // has method will return true or false.