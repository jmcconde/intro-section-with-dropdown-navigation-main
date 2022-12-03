const hamburger = document.querySelector('.hamburger');
const navClose = document.querySelector('.nav-close')
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const dropdownHeaders = document.getElementsByClassName('dropdown-title');
const dropdownContents = document.getElementsByClassName('dropdown');
const dropdownIcons = document.getElementsByClassName('dropdown-icon');

let viewport_width = window.innerWidth;
if(viewport_width >= 1180) {
    for (let i = 0; i < dropdownHeaders.length; i++) {
        dropdownContents[i].classList.remove('closed');
        dropdownIcons[i].classList.add('closed');
        dropdownHeaders[i].addEventListener('mouseenter', openDropdownIcon);
        dropdownHeaders[i].addEventListener('mouseleave', closeDropdownIcon);
        dropdownContents[i].addEventListener('mouseenter', openDropdownIcon);
        dropdownContents[i].addEventListener('mouseleave', closeDropdownIcon);
    }
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseenter', openDropdownIcon);
        navLinks[i].addEventListener('mouseleave', closeDropdownIcon);
    }
} else {
    for (let i = 0; i < dropdownHeaders.length; i++) {
        dropdownHeaders[i].addEventListener("click", toggleDropdown);
    }
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

navClose.addEventListener('click', () => {
    navClose.classList.toggle('active');
    navMenu.classList.toggle('active');
})

window.onresize = () => {
    let viewport_width = window.innerWidth;
    if(viewport_width >= 1180) {
        navMenu.classList.remove('active');
        for (let i = 0; i < dropdownHeaders.length; i++) {
            dropdownHeaders[i].removeEventListener("click", toggleDropdown);
            dropdownContents[i].classList.remove(('closed'));
            dropdownIcons[i].classList.add(('closed'));
            dropdownHeaders[i].addEventListener('mouseenter', openDropdownIcon);
            dropdownHeaders[i].addEventListener('mouseleave', closeDropdownIcon);
            dropdownContents[i].addEventListener('mouseenter', openDropdownIcon);
            dropdownContents[i].addEventListener('mouseleave', closeDropdownIcon);
        }
    }
    else {
        for (let i = 0; i < dropdownHeaders.length; i++) {
            dropdownHeaders[i].addEventListener("click", toggleDropdown);
            dropdownContents[i].classList.add(('closed'));
            dropdownIcons[i].classList.add(('closed'));
            dropdownHeaders[i].removeEventListener('mouseenter', openDropdownIcon);
            dropdownHeaders[i].removeEventListener('mouseleave', closeDropdownIcon);
            navLinks[i].removeEventListener('mouseenter', openDropdownIcon);
            navLinks[i].removeEventListener('mouseleave', closeDropdownIcon);
            dropdownContents[i].removeEventListener('mouseenter', openDropdownIcon);
            dropdownContents[i].removeEventListener('mouseleave', closeDropdownIcon);
        }
    }
};

function openDropdownIcon(event) {
    let icon = event.target.querySelector('.dropdown-icon');
    if(icon) {
        icon.classList.remove('closed');
    }
    icon = event.target.parentNode.querySelector('.dropdown-icon');
    if(icon) {
        icon.classList.remove('closed');
    }
}

function closeDropdownIcon(event) {
    let icon = event.target.querySelector('.dropdown-icon');
    if(icon) {
        icon.classList.add('closed')
    }
    icon = event.target.parentNode.querySelector('.dropdown-icon');
    if(icon) {
        icon.classList.add('closed');
    }
}

function toggleDropdown(event) {
    let icon = event.target.querySelector('.dropdown-icon')
    icon.classList.toggle('closed');
    event.target.nextSibling.nextSibling.classList.toggle('closed');
}