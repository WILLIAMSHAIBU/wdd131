const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const lastModifiedSpan = document.getElementById("lastmodified");
lastModifiedSpan.textContent = "Last Modified: " + document.lastModified;