var searchInput = document.getElementById('search');
var suggestion = document.getElementById('suggestions');
var table = document.getElementById('table');
var rows = table.getElementsByTagName('tr');
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


const profileLink = document.getElementById('profile');

    if (profileLink) {
        profileLink.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }
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
       

     
        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            var showRow = false;
            for (var j = 0; j < cells.length; j++) {
                var cellText = cells[j].innerText.trim().toLowerCase();
                if (cellText.includes(query)) {
                    showRow = true;
                    break; 
                }
            }
            rows[i].style.display = showRow ? '' : 'none';
        }
    });
       


    
    


