import 'leaflet/dist/leaflet.css';
import './styles/main.css';
import L from 'leaflet';

const mymap = new L.Map('map').setView([40.433531, -3.6953617], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
