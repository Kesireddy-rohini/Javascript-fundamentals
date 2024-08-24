
// foreach -> will print the values one by one

let num =[78,33,65,22,87,41,90];

num.forEach((n)=> {
    console.log(n);
});


num.forEach((n,i,num) =>{
    console.log(n, i, num)
});