if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, () => {
      alert("Can't get your coordinates!");
    });
  }

function success(pos){
    const { latitude, longitude } = pos.coords;
    const coords = [latitude, longitude];
    var map = L.map('map').setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

    document.getElementById("demo").innerHTML =
    "Latitude: " + coords[0] + "<br>" +
    "Longitude: " + coords[1];
}

const destinationCards = document.querySelectorAll('.destination__card');
const prevArrow = document.querySelector('.destination__nav .ri-arrow-left-s-line');
const nextArrow = document.querySelector('.destination__nav .ri-arrow-right-s-line');

let currentSetIndex = 0;
const cardsPerSet = 4;

// Function to show a set of images
function showImageSet(setIndex) {
    const startIndex = setIndex * cardsPerSet;
    const endIndex = startIndex + cardsPerSet;
    
    // Hide all images
    destinationCards.forEach((card) => {
        card.style.display = 'none';
    });

    // Show the images in the current set
    for (let i = startIndex; i < endIndex && i < destinationCards.length; i++) {
        destinationCards[i].style.display = 'block';
    }
}

// Show the initial set of images
showImageSet(currentSetIndex);

nextArrow.addEventListener('click', () => {
    currentSetIndex++;
    if (currentSetIndex * cardsPerSet >= destinationCards.length) {
        currentSetIndex = 0; 
    }
    showImageSet(currentSetIndex);
});

// Event listener for the previous arrow
prevArrow.addEventListener('click', () => {
    currentSetIndex--;
    if (currentSetIndex < 0) {
        currentSetIndex = Math.floor((destinationCards.length - 1) / cardsPerSet); // Loop to the last set
    }
    showImageSet(currentSetIndex);
});


