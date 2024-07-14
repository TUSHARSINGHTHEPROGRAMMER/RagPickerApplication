import randomEntries from './data.js'; 

const side = document.getElementById('side');
const searchBtn = document.getElementById('btn');
const searchInput = document.getElementById('search');
const mapDiv = document.getElementById('map');
const suggestion = document.getElementById('suggestions');

var items = [
    'Ferrous Iron Scrap',
    'Non-Ferrous Iron Scrap',
    'Specialized Iron Scrap',
    'Mixed Iron Scrap',
    'Obsolete Iron Scrap',
    'Plastic Scrap',
    'Raddi Paper Scrap',
    'Glass Scrap',
    'Vehicle Scrap'
];

searchInput.addEventListener('input', function() {
    var query = searchInput.value.toLowerCase();
    suggestion.innerHTML = '';

    if (query) {
        var filteredItems = items.filter(function(item) {
            return item.toLowerCase().includes(query);
        });

        filteredItems.forEach(function(item) {
            var div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = item;
            div.addEventListener('click', function() {
                searchInput.value = item;
                suggestion.innerHTML = '';
            });
            suggestion.appendChild(div);
        });
    }
});

var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addBuyerMarkers(itemName) {
    randomEntries.forEach(function(entry) {
        if (entry.itemsToBuy.includes(itemName)) {
            var apiUrl = 'https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(entry.location);

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        var lat = data[0].lat;
                        var lon = data[0].lon;

                        var marker = L.marker([lat, lon]).addTo(map);
                        marker.bindPopup(`Name: ${entry.firstName} ${entry.lastName}<br>Location: ${entry.location}<br>Items to Buy: ${entry.itemsToBuy.join(', ')}`).openPopup();
                    } else {
                        console.log('Location not found for ' + entry.location);
                    }
                })
                .catch(error => console.error('Error fetching geocode:', error));
        }
    });
}

searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim();
    updateItemInfo(query);
    addBuyerMarkers(query);
    side.classList.add("animate");
    side.classList.remove("animate2");
});

var close = document.getElementById("close");

close.addEventListener("click", function() {
    side.classList.add("animate2"); 
    side.classList.remove("animate");
});

function updateItemInfo(query) {
    side.querySelectorAll('.item-card').forEach(card => card.remove());

    randomEntries.forEach(function(entry) {
        if (entry.itemsToBuy.includes(query)) {
            var itemCard = document.createElement('div');
            itemCard.classList.add('card');
            itemCard.innerHTML = `
                <h3>Name: ${entry.firstName} ${entry.lastName}</h3>
                <p>Location: ${entry.location}</p>
                <p>Mobile Number: ${entry.mobileNumber}</p>
                <p>Account Type: ${entry.accountType}</p>
                <p>Items to Buy: ${entry.itemsToBuy.join(', ')}</p>
                <button class="btn">Book Now</button>
            `;
            side.appendChild(itemCard);
        }
    });

    if (side.innerHTML === '') {
        side.innerHTML = '<p>No items found.</p>';
    }
}
