const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const sideNav = document.getElementById("sideNav");
const contact = document.getElementById("contact");
const contactCaller = document.getElementById("contactCaller");
const aboutMeCaller = document.getElementById("aboutMeCaller");
const experienceCaller = document.getElementById("experienceCaller");

aboutMeCaller.addEventListener("click", () => {
    sideNav.classList.add("translate-x-full");
});

experienceCaller.addEventListener("click", () => {
    sideNav.classList.add("translate-x-full");
});

contactCaller.addEventListener("click", () => {
    contact.classList.add("animate-pulse");
    sideNav.classList.add("translate-x-full");
    setTimeout(()=> {
        contact.classList.remove("animate-pulse");
    }, 6000)
});

openNav.addEventListener("click", () => {
    sideNav.classList.remove("translate-x-full");
});

closeNav.addEventListener("click", () => {
    sideNav.classList.add("translate-x-full");
});
