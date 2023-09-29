function typeWriter() {
    let word = "Keller";
    let index = 0;
  
    let interval = setInterval(function () {
      if (index < word.length) {
        let char = word[index];
        
        document.getElementById("typewriter-output").textContent += char;
        index++;
      } else {
        
        clearInterval(interval);
      }
    }, 1000); 
  }
  
  typeWriter();

  



  function displayElapsedTime() {
    let seconds = 0;
  
    function updateDisplay() {
      let outputElement = document.getElementById("elapsed-time-output");
  
    if (seconds < 60) {
        outputElement.textContent = seconds + " second" + (seconds !== 1 ? 's' : '') + " have passed";
      } else {
        let minutes = Math.floor(seconds / 60);
        outputElement.textContent = minutes + " minute" + (minutes !== 1 ? 's' : '') + " have passed";
      }
  
      seconds++;
    }
  
    updateDisplay(); 
  
    let intervalId = setInterval(updateDisplay, 1000); 
  }

  displayElapsedTime();
  