function getNearbyPlaces(position) {
    let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'sushi'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
}

// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
    }
}
