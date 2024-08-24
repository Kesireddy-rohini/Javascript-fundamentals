
 let num1 =10; // global variable
function greet(u){
    let str1 ="reddy"; // local variable
    console.log(str1);
    return `Hi ${u}`;

 }
 
 let user = "Rohini";
 let str = greet(user);
 console.log(str);
 console.log(num1);
