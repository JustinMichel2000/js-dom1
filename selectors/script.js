let importantElements = document.querySelectorAll(".important");

console.log(importantElements);

for (let elements of importantElements) {

    elements.setAttribute("title", "This is an important item")
};



let images = document.querySelectorAll("img");

 console.log(images);

 for (let element of images) {

    if (element.className !== "important") {

        console.log(element);

        element.style.display = "none";
     
    }

 };


 let text = document.querySelectorAll("p");

 console.log(text);

 for (let element of text) {

   console.log(element.textContent);

   if (element.className){

   console.log(element.className);

   }

 }


 let para = document.querySelectorAll("p");

 console.log(para);

 for (let element of para) {

    let randomBetween = (min, max) =>
     min + Math.floor(Math.random() * (max - min + 1));

let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);

let rgb = `rgb(${r},${g},${b})`;

element.style.color = rgb;


  if (element.className){

    console.log(element);

    element.style.color = "initial";
 
  }

 }









   

 