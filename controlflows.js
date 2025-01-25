// if statements
/*if (condition){
    
}else if (condition) {

}else{

}
*/



//for loop
/*
for (initialisation,condition,increment){
    results
}
*/

//while loop
/* 
intialization
while (condition){
    results
    increment
}   
*/

/*for( let i=1; i<=100; i++){
    console.log(i);
    }
*/

/*let i=1;
 while(i<=100){
    console.log(i);
  i++;
}*/  

//for in loop
// for(initialisation in storage){
//  results
// }

let fruits = ["oranges", "grapes", "apples"]
for (let i in fruits) {
    console.log(fruits[i]); 
}

// for of loop
//for (initialisation of storage){
    // results
//}

for(let i of fruits){
    console.log(i);
}


//switch
/*
switch (param){
    case :
    braek;

    case:
    break;
    default;
*/

function getDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number.");
    }
}
getDayOfWeek(3);

/* 

*/