document.addEventListener("DOMContentLoaded", function() {
    console.log("Infinity Atlas Loaded");
});

const destinationImages = {
    "Hike the Inca Trail to Machu Picchu": "images/machu-picchu.jpg",
    "Skydiving in Dubai": "images/dubai-skydiving.jpg",
    "Explore the Amazon Rainforest": "images/amazon-rainforest.jpg",
    "Scuba dive in the Great Barrier Reef": "images/great-barrier-reef.jpg",
    "Unwind in Bali's luxury spas": "images/bali-spa.jpg",
    "Enjoy a serene cruise in the Maldives": "images/maldives-cruise.jpg",
    "Relax in Iceland's Blue Lagoon": "images/blue-lagoon.jpg",
    "Take a sunset yoga retreat in Santorini": "images/santorini-yoga.jpg",
    "Savor street food in Bangkok": "images/bangkok-street-food.jpg",
    "Take a pasta-making class in Italy": "images/italy-pasta.jpg",
    "Go on a wine tour in Napa Valley": "images/napa-wine-tour.jpg",
    "Experience a sushi tasting in Tokyo": "images/tokyo-sushi.jpg",
    "Visit the Louvre in Paris": "images/louvre-paris.jpg",
    "Walk the Great Wall of China": "images/great-wall.jpg",
    "Experience Dia de los Muertos in Mexico": "images/dia-de-los-muertos.jpg",
    "Explore ancient ruins in Greece": "images/greece-ruins.jpg"
};

function getRecommendations(mood) {
    const recommendations = {
        adventure: [
            "Hike the Inca Trail to Machu Picchu",
            "Skydiving in Dubai",
            "Explore the Amazon Rainforest",
            "Scuba dive in the Great Barrier Reef"
        ],
        relaxation: [
            "Unwind in Bali's luxury spas",
            "Enjoy a serene cruise in the Maldives",
            "Relax in Iceland's Blue Lagoon",
            "Take a sunset yoga retreat in Santorini"
        ],
        food: [
            "Savor street food in Bangkok",
            "Take a pasta-making class in Italy",
            "Go on a wine tour in Napa Valley",
            "Experience a sushi tasting in Tokyo"
        ],
        culture: [
            "Visit the Louvre in Paris",
            "Walk the Great Wall of China",
            "Experience Dia de los Muertos in Mexico",
            "Explore ancient ruins in Greece"
        ]
    };
    
    let resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "";
    
    if (recommendations[mood]) {
        recommendations[mood].forEach(place => {
            let listItem = document.createElement("li");
            listItem.classList.add("fade-in");
            listItem.textContent = place;
            listItem.addEventListener("click", () => updateImage(place));
            resultsList.appendChild(listItem);
        });
    }
}

function surpriseMe() {
    const allRecommendations = Object.values(destinationImages);
    const keys = Object.keys(destinationImages);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomPlace = keys[randomIndex];
    updateImage(randomPlace);
    
    let resultsList = document.getElementById("results-list");
    resultsList.innerHTML = `<li class="fade-in"><strong>${randomPlace}</strong></li>`;
}

function updateImage(place) {
    let imageElement = document.getElementById("destination-image");
    if (destinationImages[place]) {
        imageElement.src = destinationImages[place];
        imageElement.style.display = "block";
    }
}
