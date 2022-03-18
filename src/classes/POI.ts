import L, { LatLngExpression, Marker, MarkerOptions } from 'leaflet';
import { Map } from './Map';

class POI {
    private _marker: Marker;
    private _latlng: LatLngExpression;
    private _options: MarkerOptions | undefined;

    constructor(latlng: LatLngExpression, options?: MarkerOptions | undefined) {
        this._latlng = latlng;
        this._options = options;
        this._marker = new Marker(latlng, options);
    }

    public getLatlng = (): LatLngExpression => {
        return this._latlng;
    };
}

export { POI };
