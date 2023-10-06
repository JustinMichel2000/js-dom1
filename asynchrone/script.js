
// const buttonClick = document.getElementById("button");


// buttonClick.addEventListener("click", () => {
//   fetch("array.json")
//     .then((response) => response.json()) 
//     .then((data) => {

//         console.log(data);
     
//       const ul = document.createElement("ul");
     
//       data.forEach((item) => {
       
//         const li = document.createElement("li");
//         li.textContent = item.name + ", " + item.club + ", " + item.number + ", " + item.pastClubs;
//         console.log(item);
//         ul.appendChild(li); 
//       });
     
//       document.body.appendChild(ul);
//     })
//     .catch((error) => {
//       console.log("There was an error!", error);
//     });
// });



const buttonClick = document.getElementById("button");
const inputName = document.getElementById("submitName");
let inputNameValue = inputName.value;


buttonClick.addEventListener("click", () => {
const fetchName = (inputNameValue) => fetch("https://api.agify.io/?name=" + inputNameValue)
fetchName(inputNameValue)
	.then((response) => response.json())
	.then((json) => {
		console.log(json.inputNameValue);
		
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});
});