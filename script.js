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

}