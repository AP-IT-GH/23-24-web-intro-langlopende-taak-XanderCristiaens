let map = L.map('GoogleMap').setView([37.422106778856005, -122.08473205688958], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[37.4228877561327, -122.08627930233696], [37.42116816236067, -122.08287355798487]];
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

let popup = L.popup()
    .setLatLng([37.42208528395339, -122.08532749828628])
    .setContent("Google Worldwide HQ")
    .openOn(map);