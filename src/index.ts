import 'leaflet/dist/leaflet.css';
import './styles/main.css';
//import icon from './assets/images/favico.png';
import { Map } from './classes/Map';
//import { createPOI } from './classes/createPOI';
import { POI } from './classes/POI';

const myMap = new Map('map', [40.433531, -3.6953617], 17);
myMap.addTileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    19,
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
);

myMap.addPOI(new POI([40.433531, -3.6953617]));

//myMap.addPOI(createPOI([40.433531, -3.6953617]));
//const mymap = new L.Map('map').setView([40.433531, -3.6953617], 17);
/*
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
*/
/*
var myIcon = L.icon({
    iconUrl: icon,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
*/
/*
var newPOI: POI = createPOI([40.433531, -3.6953617]);
newPOI.addTo(mymap);
*/
/*
var marker = L.marker([40.433531, -3.6953617], {
    title: 'title',
    alt: 'alt',
    icon: myIcon
});
*/
//marker.bindTooltip("my tooltip text").openTooltip();
/*const popupContent =
    '<p><img src="' +
    icon +
    '"/><strong>Hello world!</strong><br />This is a nice popup.</p>';
const popupContentUrl =
    '<img src="https://cdn4.vectorstock.com/i/1000x1000/97/33/rain-cloud-icon-flat-style-vector-26799733.jpg"/>';
marker.bindPopup(popupContent).openPopup();
marker.addTo(mymap);
*/
