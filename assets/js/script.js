const boxThanks = document.querySelector('.box-thanks');
const box = document.querySelector('.box');

function submit(){
    if(document.getElementById('rate-1').checked) {
        box.style.display = "none";
        boxThanks.style.display = "block";
        document.getElementById("nilai").innerHTML = document.getElementById("rate-1").value; 
    }   
    else if(document.getElementById('rate-2').checked) {
        box.style.display = "none";
        boxThanks.style.display = "block"; 
        document.getElementById("nilai").innerHTML = document.getElementById("rate-2").value;     
    }   
    else if(document.getElementById('rate-3').checked) {  
        box.style.display = "none";
        boxThanks.style.display = "block"; 
        document.getElementById("nilai").innerHTML = document.getElementById("rate-3").value;     
    }   
    else if(document.getElementById('rate-4').checked) { 
        box.style.display = "none";
        boxThanks.style.display = "block";  
        document.getElementById("nilai").innerHTML = document.getElementById("rate-4").value;     
    }
    else if(document.getElementById('rate-5').checked) { 
        box.style.display = "none";
        boxThanks.style.display = "block";  
        document.getElementById("nilai").innerHTML = document.getElementById("rate-5").value;     
    }   
    else {
        alert('You have not selected any rating');   
    }
}

const label = document.querySelectorAll(".label__rating");
for (let i = 0; i < label.length; i++) {
    label[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
    this.className += " active";
    });
}
