document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.createElement("h3");
    greetingElement.style.textAlign = "center";
    greetingElement.style.marginTop = "10px";
    document.querySelector(".hero").appendChild(greetingElement);

    const hours = new Date().getHours();
    let greeting = "";

    if (hours >= 5 && hours < 12) {
        greeting = "Good Morning 🌞";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good Afternoon 🌤️";
    } else if (hours >= 18 && hours < 21) {
        greeting = "Good Evening 🌇";
    } else {
        greeting = "Good Night 🌙";
    }

    greetingElement.textContent = greeting;

    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.style.margin = "20px auto";
    darkModeToggle.style.display = "block";
    darkModeToggle.style.padding = "10px 20px";
    darkModeToggle.style.cursor = "pointer";
    document.body.insertBefore(darkModeToggle, document.body.firstChild);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
