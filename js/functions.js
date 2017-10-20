function initMap() {
    var place = {lat: 55.744361, lng: 37.656734};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: place
    });
    var marker = new google.maps.Marker({
        position: place,
        map: map
    });
}


$(document).ready(function () {
    initMap();
})
