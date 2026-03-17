// Typing Animation
const text = ["Java Developer","Full Stack Developer","Problem Solver"];

let index = 0;
let charIndex = 0;

function typeEffect(){
let current = text[index];
document.getElementById("typing").textContent =
current.substring(0,charIndex);

charIndex++;

if(charIndex > current.length){
index++;
charIndex = 0;
if(index >= text.length){ index = 0; }
}

setTimeout(typeEffect,150);
}
typeEffect();


// Scroll Reveal (FIXED)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
const rect = sec.getBoundingClientRect();
if(rect.top < window.innerHeight - 100){
sec.classList.add("show");
}
});
});

// Show first section initially
window.onload = () => {
sections.forEach(sec => sec.classList.add("show"));
};


// Projects
const projects = [
{
title:"E-Commerce Web Application",
desc:"This project is a full-stack e-commerce web application built using Java Spring Boot and Maven. The platform allows users to browse products, manage their cart, place orders, and make payments. It includes a product recommendation system that suggests relevant products to users based on their interactions.",
link:"http://localhost:8080/login"
},
{
title:"Hospital Management System",
desc:"Developed a backend hospital management system using Java Spring Boot that manages core hospital operations such as doctor management, patient registration, and visit tracking. The application follows MVC architecture and uses RESTful APIs to perform CRUD operations on doctors, patients, and hospital visits.",
link:"#"
},
{
title:"Sign Language Recognition",
desc:"This project is a deep learning–based application designed to recognize and interpret hand gestures used in Indian Sign Language (ISL). The main objective of the system is to bridge the communication gap between hearing-impaired individuals and people who do not understand sign language by translating hand gestures into readable output.",
link:"#"
}
];

const container = document.getElementById("project-container");

projects.forEach(project=>{
const card = document.createElement("div");
card.classList.add("project-card");

card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.desc}</p>
<a href="${project.link}" target="_blank">View Project</a>
`;

container.appendChild(card);
});


// Smooth Scroll
function scrollProjects(){
document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});
}


// Particle Background
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});