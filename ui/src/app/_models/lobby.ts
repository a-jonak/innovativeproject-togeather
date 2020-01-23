import { Coordinates } from '../map/map.component';
import { Restaurant } from './restaurant';

/*
Structure returned by API on /api/lobbies
    [
        {
            "id": 1,
            "restaurant": {
                "id": 7,
                "name": "Hoshi Sushi",
                "menu": null,
                "address": ""
            },
            "expires": "2019-09-17T12:00:00Z",
            "location": {
                "lat": 51.7234,
                "lon": 12.7723,
                "address": "15,Joliot-Cuire,Wrocław"
            }
        },
        {
          ...
        }
    ]
*/

export interface Lobby {
    readonly id: number;
    readonly restaurant: Restaurant;
    readonly expires: Date;
    readonly location: Coordinates;
    readonly address: string;
}
