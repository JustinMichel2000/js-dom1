// Find the timezones of :

// Anchorage (USA)
// Reykjavik (Iceland)
// Saint-Petersburg (Russia)
// And display the date and time of these cities along with the time and date of Brussels.


// let date = new Date();

// console.log("Brussels : " + date.toLocaleString());


// let date1 = date.toLocaleString('fr-EU',{timeZone: 'America/Anchorage'});

// console.log(date1);

// let date2 = date.toLocaleString('fr-EU' , {timeZone: 'Europe/Moscow'});

// console.log(date2);

// let date3 = date.toLocaleString('fr-EU' , {timeZone: 'Atlantic/Reykjavik'});

// console.log(date3);


// Exercise 2
// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

// Write a function to find how many days have passed since any point in time (after 1970).


// let birthday = new Date('2000-03-28');

// let today = new Date('2023-10-2');

// console.log((today.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24) + ' days have passed since my date of birth');




// function passedDays(a, b) {

//     let day = 1000 * 60 * 60 * 24;

//     let day1 = new Date(a);

//     let day2= new Date(b);

//     let diffTime = day2.getTime() - day1.getTime();

//     let diffDays = Math.round(diffTime / day);

//     return diffDays;
// }

// console.log(passedDays("1965-3-28", "2023-9-2")); 


// Exercise 3
// Using timestamps, find the exact time and date we will be in 80000 hours.

// Write a function to display the time and date for any amount of hours given in the future. 
// Create a number input for the hours and listen for keyup events, 
// dynamically display the date in the number of hours given by the input.




// let timeInput = document.getElementById("hours");

// let resultatDiv = document.getElementById("result");

//         timeInput.addEventListener("keyup", displayTime);

//         function displayTime() {

//             let time = parseFloat(timeInput.value); 

//             if (time > 0) { 
//                 let today = new Date();
//                 today.setHours(today.getHours() + time);

//                 resultatDiv.innerHTML= "Date with hours added : " + today;
        
//         }

//     }













  