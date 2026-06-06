// Objects - defined first so everything can use it
const rohith = {
    name: "Rohith S",
    age: 20,
    city: "Coimbatore",
    goal: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript"]
};

// Arrow Functions
const getGreeting = (name) => "Hello " + name + "!";
const getGoal = () => "My goal is to be a " + rohith.goal;
console.log(getGreeting("Rohith"));
console.log(getGoal());

// Main window onload
window.onload = function() {

    // Update portfolio from object
    document.querySelector('header h1').textContent = "Hi, I'm " + rohith.name;
    document.querySelector('header p').textContent = "Aspiring " + rohith.goal + " from " + rohith.city;

    // Dynamic footer year
    const footerYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = "© " + footerYear + " Rohith S. All rights reserved";

    // Dynamically create skill badges
   const skillsList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Responsive Design",
    "Git & GitHub",
    "VS Code",
    "GitHub Pages"
];

    const container = document.getElementById('skillsContainer');
    skillsList.forEach(function(skill) {
        const badge = document.createElement('span');
        badge.className = 'skill-tag';
        badge.textContent = skill;
        container.appendChild(badge);
    });

    // Dark Mode with Local Storage
    const darkModeBtn = document.getElementById('darkModeBtn');

    // Check saved preference on page load
    if(localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️ Light Mode';
    }

    // Toggle on click
    darkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️ Light Mode';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeBtn.textContent = '🌙 Dark Mode';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;

        if(name === '' || email === '' || message === '') {
            formMessage.textContent = '❌ Please fill in all fields!';
            formMessage.style.color = 'red';
            return;
        }
        formMessage.textContent = '✅ Message sent! I will get back to you soon!';
        formMessage.style.color = 'green';
        contactForm.reset();
    });
    // Fetch GitHub Profile - Async/Await
const getGithubData = async () => {
    const response = await fetch('https://api.github.com/users/Rohith-S-23');
    const data = await response.json();
    
    document.getElementById('repoCount').textContent = data.public_repos;
    document.getElementById('followerCount').textContent = data.followers;
    document.getElementById('followingCount').textContent = data.following;
};

getGithubData();

};