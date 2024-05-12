let map = L.map('SamMap').setView([51.372725355893735, -0.5315368057205293], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.circle([51.372725355893735, -0.5315368057205293], {
    color: "#e60005",
    radius: 75,
}).addTo(map);

let popup = L.popup()
    .setLatLng([51.372725355893735, -0.5315368057205293])
    .setContent("Samsung Europa HQ")
    .openOn(map);