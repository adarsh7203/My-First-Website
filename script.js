document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

const heroText = document.getElementById('hero-text');
let hour = new Date().getHours();
if (hour < 12) {
    heroText.innerText = "Good Morning 🌅 Adarsh's World 🌍💻";
} else if (hour < 18) {
    heroText.innerText = "Good Afternoon ☀ Adarsh's World 🌍💻";
} else {
    heroText.innerText = "Good Evening 🌙 Adarsh's World 🌍💻";
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before sending! 💡");
        return;
    }
    alert("Thank you for your message, " + name + "! 💌");
    this.reset();
});

const darkModeBtn = document.getElementById('dark-mode-toggle');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = "☀ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});
