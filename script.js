function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
    updateButtonText();
}

function updateButtonText(){
    const button = document.querySelector(".dark-mode-toggle");
    if (localStorage.getItem('theme') === 'dark') {git 
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}

function highlightCurrentPage(){
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage){
            link.classList.add("active-page");
        } else {
            link.classList.remove("active-page");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateButtonText();
    highlightCurrentPage();
});
