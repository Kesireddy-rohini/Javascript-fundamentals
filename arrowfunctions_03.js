let add = (num1, num2) => {

    if(num1&&num2>0){
        return num1+num2;
    }
    else{
        console.log("please enter a positive number");
    }
}

console.log(add(5,-6));