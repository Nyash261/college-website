var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}
document.addEventListener("DOMContentLoaded", function () {
    // Fetch user name from localStorage (or backend API)
    let userName = localStorage.getItem("userName") || "Guest"; // Default to 'Guest' if not set

    // Update the username in the UI
    document.getElementById("user-name").textContent = `Welcome, ${userName}`;
});

// document.addEventListener('contextmenu', event => event.preventDefault());