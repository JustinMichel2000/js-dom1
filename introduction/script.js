console.log(document);

document.title = "Modifying the DOM";

document.body.style.backgroundColor = "#FF69B4";

let collection = document.body.children;

for (let element of collection) {

    console.log(element);
};


