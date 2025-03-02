let date = new Date();
let currentDate = date.toDateString();


document.getElementById("showDate").textContent = currentDate;

// window.location.href = "redirect.html";

document.getElementById("discover").addEventListener("click", function (){

    window.location.href = "redirect.html";

});

