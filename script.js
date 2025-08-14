document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.createElement("div");
    greeting.style.position = "fixed";
    greeting.style.top = "10px";
    greeting.style.right = "10px";
    greeting.style.background = "#ff4d6d";
    greeting.style.color = "white";
    greeting.style.padding = "10px 15px";
    greeting.style.borderRadius = "8px";
    greeting.style.fontSize = "1rem";
    greeting.style.zIndex = "1000";
    document.body.appendChild(greeting);

    function updateGreeting() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            greeting.textContent = "Good Morning 🌞";
        } else if (hour >= 12 && hour < 18) {
            greeting.textContent = "Good Afternoon ☀️";
        } else if (hour >= 18 && hour < 21) {
            greeting.textContent = "Good Evening 🌇";
        } else {
            greeting.textContent = "Good Night 🌙";
        }
    }

    updateGreeting();

    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Toggle Dark Mode";
    darkModeBtn.style.position = "fixed";
    darkModeBtn.style.bottom = "10px";
    darkModeBtn.style.right = "10px";
    darkModeBtn.style.padding = "10px";
    darkModeBtn.style.background = "#333";
    darkModeBtn.style.color = "#fff";
    darkModeBtn.style.border = "none";
    darkModeBtn.style.borderRadius = "8px";
    darkModeBtn.style.cursor = "pointer";
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
