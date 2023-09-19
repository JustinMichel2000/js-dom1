
let learners = [
    "Alexandre", "Antoine", "Bastien", "Carole", "Elisabeth", "Elodie",
    "Justin", "Justine", "Kimi", "Layla", "Lidwine", "Lucas", "Mathias",
    "Okly", "Pierre", "Robin", "Rosalie", "Stephane", "Tim", "Tom", 
    "Valentin", "Alexandre", "Virginie"
];

function getRandomColor() 
{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function getTextColor(backgroundColor) {

    let rgb = backgroundColor.match(/\d+/g);

    if (rgb) {
        let brightness = 
        (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        return brightness > 128 ? "#000" : "#fff";
    return "#000"; 
}
}


let article = document.querySelector("article");


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(learners);


let section = document.createElement("section");


learners.forEach(learner => {
    
    let paragraph = document.createElement("p");
    paragraph.textContent = learner;
    let backgroundColor = getRandomColor();
    paragraph.style.backgroundColor = backgroundColor;
    paragraph.style.color = getTextColor(backgroundColor);
    section.appendChild(paragraph);
});

article.appendChild(section);



