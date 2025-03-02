
const buttons = document.querySelectorAll(".clickedBtn");

const historyDiv = document.getElementById("history");

const taskAssign = document.getElementById("task-Assign");

const taskCompleted = document.getElementById("navTask");

const removeChild = document.getElementById("clear");

let clickedCount = 0;

function getCurrentTime() {
    const time = new Date();
    return time.toLocaleString();
}


buttons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Board Updated successfully");
        const time = getCurrentTime();
        const newEntry = document.createElement("div");
        newEntry.classList.add("history-item");
        newEntry.innerHTML = `<h4>You have Complete The Task Add Dark Mode at</h4><p>${time}</p>`;

        historyDiv.appendChild(newEntry);

        taskAssign.textContent = parseInt(taskAssign.textContent)-1;
        taskCompleted.textContent = parseInt(taskCompleted.textContent)+1;

        this.disabled = true;
        clickedCount++;

        if (clickedCount === buttons.length) {
            alert("congratulation !! you have complete the all task .");
        }

    });
});


removeChild.addEventListener("click", function() {
    historyDiv.innerHTML = ``;
});

