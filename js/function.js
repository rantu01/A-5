
const buttons = document.querySelectorAll(".clickedBtn");

const historyDiv = document.getElementById("history");


function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString();
}


buttons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Board Updated successfully");
        const time = getCurrentTime();
        const newEntry = document.createElement("div");
        newEntry.classList.add("history-item");
        newEntry.innerHTML = `<h4>You have Complete The Task Add Dark Mode at</h4><em>${time}</em>`;

        historyDiv.appendChild(newEntry);
        this.disabled = true;

    });
});


