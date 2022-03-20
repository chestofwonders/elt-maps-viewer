import 'leaflet/dist/leaflet.css';
import './styles/main.css';
//import icon from './assets/images/favico.png';
import { Map } from './classes/Map';
import { POI, POIOptions, PopUp } from './classes/POI';
//import { Marker, popup } from 'leaflet';

const myMap = new Map('map', [40.433531, -3.6953617], 17);

myMap.addTileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    19,
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
);

const newOptions: POIOptions = {
    title: 'sdfsfsfsdfdsf',
    alt: 'alt2'
};

const newPopup: PopUp = {
    content: '<strong>hoooooooola</strong>adios',
    className: 'hhhhh'
};

const myPOI = new POI([40.433531, -3.6953617], newOptions, newPopup);

myMap.addPOI(myPOI);
