// Modify the script.js to create a new <section> with a random background-color 
// for each learner in your group. This section should contain a paragraph with 
// the name of the learner. Those sections should be appended in the <article>

// If the background is dark the text should be white, if the 
// background is light the text should be black

// Find a way so that everytime you load the page the order of the elements changes!



function addElement() {
   
    let newSection= document.createElement("section");

    for (let elements of newSection) {

        let newContent = document.createTextNode("");

        newSection.appendChild(newContent);


    }
  
    
    // add the newly created element and its content into the DOM
    // let currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
  }








["Alexandre", "Antoine", "Bastien", "Carole", 
"Elisabeth", "Elodie", "Justin", "Justine", "Kimi",
 "Layla", "Lidwine", "Lucas", "Mathias", "Okly", "Pierre", 
 "Robin", "Rosalie", "Stephane", "Tim", "Tom", 
 "Valentin", "Alexandre", "Virginie"]

