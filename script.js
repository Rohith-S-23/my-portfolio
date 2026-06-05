console.log("Hello Rohith! JavaScript is working!");

// Data Types
const myAge = 20;
const isLearning = true;
const skills = ["HTML", "CSS", "JavaScript"];
console.log("Age: " + myAge);
console.log("Is learning: " + isLearning);
console.log("Skills: " + skills);
console.log("First skill: " + skills[0]);
console.log("Second skill: " + skills[1]);

// Function
function greetUser(name) {
    return "Welcome to my portfolio, " + name + "!";
}
console.log(greetUser("Rohith"));
console.log(greetUser("Visitor"));

// Arrays & Loops
const mySkills = ["HTML", "CSS", "JavaScript", "React", "Java"];

for(let i = 0; i < mySkills.length; i++) {
    console.log(i + " → " + mySkills[i]);
}

mySkills.forEach(function(skill) {
    console.log("I know: " + skill);
});

// Main window onload
window.onload = function() {

    // Welcome message
    alert("Welcome to Rohith's Portfolio! 👋");

    // Variables
    const myName = "Rohith";
    const myCity = "Coimbatore";
    console.log("My name is " + myName);
    console.log("I am from " + myCity);

    // Dynamic footer year
    const footerYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = 
        "© " + footerYear + " Rohith S. All rights reserved";

    // Dynamically create skill badges
    const skillsList = ["HTML5", "CSS3", "JavaScript", 
                        "Responsive Design", "Git & GitHub", 
                        "VS Code", "GitHub Pages"];

    const container = document.getElementById('skillsContainer');

    skillsList.forEach(function(skill) {
        const badge = document.createElement('span');
        badge.className = 'skill-tag';
        badge.textContent = skill;
        container.appendChild(badge);
    });

    // Count skills
    const skillTags = document.querySelectorAll('.skill-tag');
    console.log("Total skills: " + skillTags.length);

    // Dark Mode Toggle
    const darkModeBtn = document.getElementById('darkModeBtn');
    darkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️ Light Mode';
        } else {
            darkModeBtn.textContent = '🌙 Dark Mode';
        }
    });

};