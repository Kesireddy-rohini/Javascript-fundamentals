
let day = 'Monday';

switch(day){
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("9 am");
        break;
    case 'Friday':
        console.log("12pm");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("4pm");
        break;
    default:
        console.log("7 am - Wakeup")


}

console.log("get lost")