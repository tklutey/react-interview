
export class SurflineClient {
    private url: string;
    constructor() {
        this.url = 'https://services.surfline.com/kbyg/regions/overview?subregionId=58581a836630e24c4487917a&meterRemaining=undefined';
    }
    _createUrl(url: string) {
        return 'https://corsproxy.io/?' + encodeURIComponent(url)
    }

    getSpotOverview() {
        return fetch(this._createUrl(this.url))
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
    }
}