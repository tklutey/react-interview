// 20231012114846
// https://services.surfline.com/kbyg/regions/overview?subregionId=58581a836630e24c4487917a&meterRemaining=undefined

type Advertising = {
    spotId: null | string;
    subregionId: string;
};

export type Units = {
    temperature: 'F';
    tideHeight: 'FT';
    swellHeight: 'FT';
    waveHeight: 'FT';
    windSpeed: 'KTS';
    pressure: 'MB';
};

export type Status = {
    status: 'active';
    inactiveMessage: '';
};

export type Forecast = {
    forecastStatus: Status;
    nextForecastTimestamp: number;
    nextForecast: {
        timestamp: number;
        utcOffset: number;
    };
    forecaster: {
        name: string;
        title: string;
        iconUrl: string;
    };
    highlights: string[];
    bestBets: string[]; // You can specify a more specific type if needed
    bets: {
        best: null | string;
        worst: null | string;
    };
    hasHighlights: true;
    hasBets: false;
};

export type Camera = {
    title: string;
    isPremium: true;
    isPrerecorded: false;
    lastPrerecordedClipStartTimeUTC: string;
    lastPrerecordedClipEndTimeUTC: string;
    status: {
        isDown: false;
        message: '';
        subMessage: '';
        altMessage: '';
    };
    supportsHighlights: false;
    supportsCrowds: false;
    streamUrl: string;
    stillUrl: string;
    pixelatedStillUrl: string;
    rewindBaseUrl: string;
    alias: string;
    highlights: null; // You can specify a more specific type if needed
    _id: string;
    control: string;
    nighttime: false;
    rewindClip: string;
};

export type Spot = {
    _id: string;
    name: string;
    conditions: {
        value: string;
        sortableCondition: number;
        human: true;
        expired: false;
    };
    waveHeight: {
        min: number;
        max: number;
        plus: false;
        occasional: null; // You can specify a more specific type if needed
        humanRelation: string;
        human: true;
    };
    lat: number;
    lon: number;
    cameras: Camera[];
    rank: number;
    wind: {
        speed: number;
        direction: number;
        directionType: 'Cross-shore' | 'Offshore'; // You can specify other possible values
        gust: number;
    };
    tide: {
        previous: {
            type: string;
            height: number;
            timestamp: number;
            utcOffset: number;
        };
        current: {
            type: string;
            height: number;
            timestamp: number;
            utcOffset: number;
        };
        next: {
            type: string;
            height: number;
            timestamp: number;
            utcOffset: number;
        };
    };
};

export type BreadcrumbItem = {
    name: string;
    href: string;
};

export type Data = {
    _id: string;
    name: string;
    primarySpot: string;
    breadcrumb: BreadcrumbItem[];
    timestamp: number;
    forecastSummary: Forecast;
    spots: Spot[];
};

export type SurflineData = {
    associated: {
        advertising: Advertising;
        abbrTimezone: 'EDT';
        timezone: 'America/New_York';
        utcOffset: -4;
        units: Units;
        chartsUrl: string;
        legacyId: string;
    };
    data: Data;
};

export const surflineData: SurflineData = {
  "associated": {
    "advertising": {
      "spotId": null,
      "subregionId": "131699"
    },
    "abbrTimezone": "EDT",
    "timezone": "America/New_York",
    "utcOffset": -4,
    "units": {
      "temperature": "F",
      "tideHeight": "FT",
      "swellHeight": "FT",
      "waveHeight": "FT",
      "windSpeed": "KTS",
      "pressure": "MB"
    },
    "chartsUrl": "/surf-charts/wave-height/nassau-queens-county/58581a836630e24c4487917a",
    "legacyId": "131699"
  },
  "data": {
    "_id": "58581a836630e24c4487917a",
    "name": "Nassau - Queens County",
    "primarySpot": "5842041f4e65fad6a7708850",
    "breadcrumb": [
      {
        "name": "United States",
        "href": "https://www.surfline.com/surf-reports-forecasts-cams/united-states/6252001"
      },
      {
        "name": "New York",
        "href": "https://www.surfline.com/surf-reports-forecasts-cams/united-states/new-york/5128638"
      },
      {
        "name": "Nassau County",
        "href": "https://www.surfline.com/surf-reports-forecasts-cams/united-states/new-york/nassau-county/5128316"
      }
    ],
    "timestamp": 1697114097,
    "forecastSummary": {
      "forecastStatus": {
        "status": "active",
        "inactiveMessage": ""
      },
      "nextForecastTimestamp": 1697200497,
      "nextForecast": {
        "timestamp": 1697200497,
        "utcOffset": -4
      },
      "forecaster": {
        "name": "Tim Kent",
        "title": "Forecaster",
        "iconUrl": "https://www.gravatar.com/avatar/00f55788d0aa534df06ba8a445572aac?d=mm"
      },
      "highlights": [
        "Best Surf Next 7 Days: Watch Sunday PM into Monday, leftovers Tuesday",
        "Surf trends down but rideable windows for bigger boards today, then small Fri-Sat",
        "Next round of stronger surf likely Sunday PM into early next week - stay tuned"
      ],
      "bestBets": [

      ],
      "bets": {
        "best": null,
        "worst": null
      },
      "hasHighlights": true,
      "hasBets": false
    },
    "spots": [
      {
        "_id": "5842041f4e65fad6a77089fb",
        "name": "Breezy Point",
        "conditions": {
          "value": "POOR",
          "sortableCondition": 1,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 0,
          "max": 1,
          "plus": false,
          "occasional": null,
          "humanRelation": "Shin to knee",
          "human": true
        },
        "lat": 40.54698301868125,
        "lon": -73.9268,
        "cameras": [

        ],
        "rank": 0,
        "wind": {
          "speed": 4,
          "direction": 87.42089,
          "directionType": "Cross-shore",
          "gust": 5
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125455,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "5842041f4e65fad6a7708852",
        "name": "Rockaways",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 1.75,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 2,
          "max": 3,
          "plus": false,
          "occasional": null,
          "humanRelation": "Thigh to waist",
          "human": true
        },
        "lat": 40.58342841721757,
        "lon": -73.81182,
        "cameras": [
          {
            "title": "NY - 90th St Rockaways",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:20.341Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:20.341Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-rockaway90th/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-rockaway90th/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-rockaway90th/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-rockaway90th/ec-rockaway90th",
            "alias": "ec-rockaway90th",
            "highlights": null,
            "_id": "58349fbd3421b20545c4b57c",
            "control": "https://camstills.cdn-surfline.com/ec-rockaway90th/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-rockaway90th/ec-rockaway90th.1000.2023-10-11.mp4"
          },
          {
            "title": "NY - 77th St Rockaways",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:20.479Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:20.479Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-rockaway77th/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-rockaway77th/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-rockaway77th/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-rockaway77th/ec-rockaway77th",
            "alias": "ec-rockaway77th",
            "highlights": null,
            "_id": "583498c9e411dc743a5d5288",
            "control": "https://camstills.cdn-surfline.com/ec-rockaway77th/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-rockaway77th/ec-rockaway77th.1000.2023-10-11.mp4"
          },
          {
            "title": "NY - 77th to 81st Rockaway",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:20.385Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:20.385Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-rockaway77thto81st/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-rockaway77thto81st/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-rockaway77thto81st/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-rockaway77thto81st/ec-rockaway77thto81st",
            "alias": "ec-rockaway77thto81st",
            "highlights": null,
            "_id": "6421e1bc01096a4dfd034235",
            "control": "https://camstills.cdn-surfline.com/ec-rockaway77thto81st/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-rockaway77thto81st/ec-rockaway77thto81st.1000.2023-10-11.mp4"
          },
          {
            "title": "NY - 110th St Rockaways",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:20.480Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:20.480Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-rockaway110th/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-rockaway110th/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-rockaway110th/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-rockaway110th/ec-rockaway110th",
            "alias": "ec-rockaway110th",
            "highlights": null,
            "_id": "62ffefa6b3429c0b91c19b0b",
            "control": "https://camstills.cdn-surfline.com/ec-rockaway110th/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-rockaway110th/ec-rockaway110th.1000.2023-10-11.mp4"
          }
        ],
        "rank": 1,
        "wind": {
          "speed": 1,
          "direction": 82.97719,
          "directionType": "Cross-shore",
          "gust": 2
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125518,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "5842041f4e65fad6a77089f8",
        "name": "84th Street",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 1.75,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 2,
          "max": 3,
          "plus": false,
          "occasional": null,
          "humanRelation": "Thigh to waist",
          "human": true
        },
        "lat": 40.58456099581507,
        "lon": -73.80730032920837,
        "cameras": [

        ],
        "rank": 2,
        "wind": {
          "speed": 1,
          "direction": 82.97719,
          "directionType": "Cross-shore",
          "gust": 2
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125517,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "5842041f4e65fad6a77089fd",
        "name": "30th - 39th Streets",
        "conditions": {
          "value": "POOR",
          "sortableCondition": 1,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.591277,
        "lon": -73.770792,
        "cameras": [

        ],
        "rank": 4,
        "wind": {
          "speed": 1,
          "direction": 35.49786,
          "directionType": "Offshore",
          "gust": 7
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125517,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "584204214e65fad6a7709d21",
        "name": "West End, Long Beach",
        "conditions": {
          "value": "POOR",
          "sortableCondition": 1,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.58317888918512,
        "lon": -73.69179,
        "cameras": [

        ],
        "rank": 5,
        "wind": {
          "speed": 2,
          "direction": 51.40801,
          "directionType": "Offshore",
          "gust": 2
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125518,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "5842041f4e65fad6a77089f5",
        "name": "Laurelton Blvd.",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 1.5,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.58270702399518,
        "lon": -73.67251552079799,
        "cameras": [

        ],
        "rank": 6,
        "wind": {
          "speed": 2,
          "direction": 51.40801,
          "directionType": "Offshore",
          "gust": 2
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125517,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "5842041f4e65fad6a7708850",
        "name": "Lincoln Blvd",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 1.5,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.582703230722,
        "lon": -73.65247,
        "cameras": [
          {
            "title": "NY - Lincoln Blvd Overview",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:21.748Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:21.748Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-lincoln/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-lincoln/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-lincoln/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-lincoln/ec-lincoln",
            "alias": "ec-lincoln",
            "highlights": null,
            "_id": "58349be03421b20545c4b550",
            "control": "https://camstills.cdn-surfline.com/ec-lincoln/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-lincoln/ec-lincoln.1000.2023-10-11.mp4"
          },
          {
            "title": "NY - Lincoln Blvd",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:21.749Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:21.749Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-lincolnfixed/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-lincolnfixed/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-lincolnfixed/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-lincolnfixed/ec-lincolnfixed",
            "alias": "ec-lincolnfixed",
            "highlights": null,
            "_id": "58349bdae411dc743a5d52a9",
            "control": "https://camstills.cdn-surfline.com/ec-lincolnfixed/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-lincolnfixed/ec-lincolnfixed.1000.2023-10-11.mp4"
          }
        ],
        "rank": 8,
        "wind": {
          "speed": 2,
          "direction": 51.40801,
          "directionType": "Offshore",
          "gust": 2
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125517,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "58dd748982d034001252e3dc",
        "name": "Pacific Blvd. ",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 1.5,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.58281730569218,
        "lon": -73.6407995223999,
        "cameras": [
          {
            "title": "NY - Pacific Blvd",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:19.919Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:19.919Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-pacificblvd/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-pacificblvd/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-pacificblvd/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-pacificblvd/ec-pacificblvd",
            "alias": "ec-pacificblvd",
            "highlights": null,
            "_id": "58d30c84f5eced643004de9a",
            "control": "https://camstills.cdn-surfline.com/ec-pacificblvd/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-pacificblvd/ec-pacificblvd.1000.2023-10-11.mp4"
          }
        ],
        "rank": 10,
        "wind": {
          "speed": 2,
          "direction": 55.70494,
          "directionType": "Offshore",
          "gust": 7
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125517,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "5842041f4e65fad6a77089e2",
        "name": "Lido Beach",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 1.75,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.58433,
        "lon": -73.62953,
        "cameras": [
          {
            "title": "NY - Lido Beach",
            "isPremium": true,
            "isPrerecorded": false,
            "lastPrerecordedClipStartTimeUTC": "2023-10-11T15:45:18.492Z",
            "lastPrerecordedClipEndTimeUTC": "2023-10-11T15:45:18.492Z",
            "status": {
              "isDown": false,
              "message": "",
              "subMessage": "",
              "altMessage": ""
            },
            "supportsHighlights": false,
            "supportsCrowds": false,
            "streamUrl": "https://cams.cdn-surfline.com/cdn-ec/ec-lido/playlist.m3u8",
            "stillUrl": "https://camstills.cdn-surfline.com/ec-lido/latest_small.jpg",
            "pixelatedStillUrl": "https://camstills.cdn-surfline.com/ec-lido/latest_small_pixelated.png",
            "rewindBaseUrl": "https://camrewinds.cdn-surfline.com/ec-lido/ec-lido",
            "alias": "ec-lido",
            "highlights": null,
            "_id": "58349bd3e411dc743a5d52a8",
            "control": "https://camstills.cdn-surfline.com/ec-lido/latest_small.jpg",
            "nighttime": false,
            "rewindClip": "https://camrewinds.cdn-surfline.com/ec-lido/ec-lido.1000.2023-10-11.mp4"
          }
        ],
        "rank": 11,
        "wind": {
          "speed": 2,
          "direction": 54.71338,
          "directionType": "Cross-shore",
          "gust": 2
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125517,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "5842041f4e65fad6a77089ee",
        "name": "West End, Jones Beach",
        "conditions": {
          "value": "POOR",
          "sortableCondition": 1,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.57633275206492,
        "lon": -73.56895305108567,
        "cameras": [

        ],
        "rank": 12,
        "wind": {
          "speed": 2,
          "direction": 56.43529,
          "directionType": "Offshore",
          "gust": 8
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.8,
            "timestamp": 1697107081,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.8,
            "timestamp": 1697125513,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.5,
            "timestamp": 1697128691,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "640a446fe92030b9ae9f10a8",
        "name": "Jones Beach State Park",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 2,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.59186,
        "lon": -73.50713,
        "cameras": [

        ],
        "rank": 13,
        "wind": {
          "speed": 2,
          "direction": 61.13291,
          "directionType": "Cross-shore",
          "gust": 9
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.3,
            "timestamp": 1697106481,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.7,
            "timestamp": 1697124676,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.4,
            "timestamp": 1697127731,
            "utcOffset": -4
          }
        }
      },
      {
        "_id": "640a446c451905857f9de596",
        "name": "Tobay Beach",
        "conditions": {
          "value": "POOR_TO_FAIR",
          "sortableCondition": 2,
          "human": true,
          "expired": false
        },
        "waveHeight": {
          "min": 1,
          "max": 2,
          "plus": false,
          "occasional": null,
          "humanRelation": "Knee to thigh",
          "human": true
        },
        "lat": 40.6096,
        "lon": -73.4241,
        "cameras": [

        ],
        "rank": 14,
        "wind": {
          "speed": 2,
          "direction": 49.74967,
          "directionType": "Cross-shore",
          "gust": 2
        },
        "tide": {
          "previous": {
            "type": "HIGH",
            "height": 4.3,
            "timestamp": 1697106481,
            "utcOffset": -4
          },
          "current": {
            "type": "NORMAL",
            "height": 0.6,
            "timestamp": 1697125634,
            "utcOffset": -4
          },
          "next": {
            "type": "LOW",
            "height": 0.4,
            "timestamp": 1697127731,
            "utcOffset": -4
          }
        }
      }
    ]
  }
}