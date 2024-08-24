

let num = [44,78,33,55,102,44,87];

// below 'n' are all different for each methods
num.filter(n => n%2==0)   // fliter method : fliter the elements based on conditions
    .map(n => n*2)        //map will do the complex things
    .forEach(n => {
        console.log(n);
    })