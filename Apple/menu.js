const searchButton = document.querySelector('.link-search');
const closeButton = document.querySelector('.link-close');
const desktopNav = document.querySelector('.desktop-nav');
const searchContaine = document.querySelector('.search-containe');
const overlay = document.querySelector('.overlay');

searchButton.addEventListener('click', function(){
    desktopNav.classList.add('hide');
    searchContaine.classList.remove('hide');
    overlay.classList.add('show');
});

closeButton.addEventListener('click', function(){
    desktopNav.classList.remove('hide');
    searchContaine.classList.add('hide');
    overlay.classList.remove('show');
});

overlay.addEventListener('click', function(){
    desktopNav.classList.remove('hide');
    searchContaine.classList.add('hide');
    overlay.classList.remove('show');
});

// Versão Mobile

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", function(){
    navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", function(){
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", function(){
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})