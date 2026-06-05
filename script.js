console.log("Hello Rohith! JavaScript is working!");
//welcome msg
window.onload = function() {
    alert("Welcome to Rohith's Portfolio! 👋");
}
//darkmode button
const darkModeBtn=document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        darkModeBtn.textContent='☀️ Light Mode';
    } else{
        darkModeBtn.textContent='🌙 Dark Mode';
    }
});