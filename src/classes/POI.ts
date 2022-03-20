import {
    Icon,
    LatLngExpression,
    MarkerOptions,
    PopupOptions,
    Point
} from 'leaflet';

export type POIOptions = MarkerOptions & {
    icon?: Icon;
    keyboard?: boolean;
    title?: string;
    alt?: string;
    zIndexOffset?: number;
    opacity?: number;
    riseOnHover?: boolean;
    riseOffset?: number;
    pane?: string;
    shadowPane?: string;
    bubblingMouseEvents?: boolean;
};

export type PopUp = {
    content: string;
    className?: string;
};

class POI {
    private _latlng: LatLngExpression;
    private _popUp: PopUp | undefined;
    private _options: POIOptions | undefined;

    constructor(
        latlng: LatLngExpression,
        options?: POIOptions | undefined,
        popup?: PopUp | undefined
    ) {
        this._latlng = latlng;
        this._options = options;
        this._popUp = popup;
    }

    public getLatlng = (): LatLngExpression => {
        return this._latlng;
    };

    public getOptions = (): POIOptions | undefined => {
        return this._options;
    };

    public bindPopup = (content: PopUp) => {
        this._popUp = content;
    };

    public getPopUp = (): PopUp | undefined => {
        return this._popUp;
    };
}

export { POI };
