function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the theme color when button is clicked
function changeThemeColor() {
    const newColor = getRandomColor(); // Get a random color
    document.body.style.backgroundColor = newColor; // Set the background color
}

document.getElementById("theme_color").addEventListener("click", changeThemeColor);