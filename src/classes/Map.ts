import L, { LatLngExpression, Marker, tileLayer } from 'leaflet';
import { POI } from './POI';

class Map {
    private _domElement: string | HTMLDivElement;
    private _view: LatLngExpression;
    private _zoom: number;
    private _map: L.Map;

    constructor(
        domElement: string | HTMLDivElement,
        view: LatLngExpression,
        zoom: number
    ) {
        this._domElement = domElement;
        this._view = view;
        this._zoom = zoom;
        this._map = new L.Map(this._domElement).setView(this._view, this._zoom);
    }

    public addTileLayer = (
        url: string,
        maxZoom: number,
        attribution: string
    ) => {
        tileLayer(url, {
            maxZoom: maxZoom,
            attribution: attribution
        }).addTo(<L.Map>this._map);
    };

    public addPOI = (poi: POI) => {
        const newMap: L.Map = this._map;
        const newMarker: L.Marker = new Marker(poi.getLatlng());
        newMarker.addTo(newMap);
    };
}

export { Map };
