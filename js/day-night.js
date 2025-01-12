// Select the toggle container and the center container element
const toggleContainer = document.getElementById('theme-toggle');
const centerContainer = document.getElementById('center-container');

// Check if a theme is saved in localStorage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    centerContainer.className = `center-container ${savedTheme}`; // Apply the saved theme class
}

// Add an event listener to handle theme changes
toggleContainer.addEventListener('click', () => {
    if (centerContainer.classList.contains('light')) {
        centerContainer.className = 'center-container night'; // Switch to night theme
        localStorage.setItem('theme', 'night'); // Save night theme to localStorage
    } else {
        centerContainer.className = 'center-container light'; // Switch to light theme
        localStorage.setItem('theme', 'light'); // Save light theme to localStorage
    }
});
