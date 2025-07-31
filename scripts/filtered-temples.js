const temples = [{
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temples
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Kinshasa DR Congo",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Barranquilla Colombia Temple",
        location: "Colombia",
        dedicated: "2018, December, 9",
        area: 19000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/800x800/5-Barranquilla-Columblia-Temple-2135239.jpg"
    },
    {
        templeName: "Atlanta Georgia Temple",
        location: "Atlanta, Georgia, United States",
        dedicated: "1983, October, 30",
        area: 16000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x500/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
    },
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, New Mexico, United States",
        dedicated: "1998, December, 20",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/800x500/albuquerque-temple-lds-137883-wallpaper.jpg"
    }, {
        templeName: "Apia Samoa Temple",
        location: "Apia, Samoa",
        dedicated: "2005, August, 21",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x1280/aba-nigeria-temple-lds-248714-wallpaper.jpg",
    },
    {
        templeName: "Adelaide Australia Temple",
        location: "Adelaide, South Australia, Australia",
        dedicated: "2000, September, 16",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x450/adelaide-australia-temple-lds-866420-wallpaper.jpg"
    }, {
        templeName: "Arequipa Peru Temple",
        location: "Arequipa, Peru",
        dedicated: "2019, December, 15",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
    }

];
const container = document.getElementById("temples-container");

function renderTemples(templesArray) {
    container.innerHTML = "";
    templesArray.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");
        card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
        container.appendChild(card);
    });
}

// Parse the year from the dedicated string
function getDedicatedYear(dedicated) {
    return parseInt(dedicated.split(',')[0]);
}

// Filter logic
function filterTemples(criteria) {
    let filtered;
    switch (criteria) {
        case "old":
            filtered = temples.filter(t => getDedicatedYear(t.dedicated) < 1900);
            break;
        case "new":
            filtered = temples.filter(t => getDedicatedYear(t.dedicated) > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    renderTemples(filtered);
}

// Attach event listeners to buttons
document.querySelectorAll(".nav-menu button").forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        filterTemples(filter);
    });
});

// Initial load
renderTemples(temples);