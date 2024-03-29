export default {
  "Flights": {
    "SessionKey": "998751ac-eaeb-4298-9a53-ba94b6c47b4a",
    "Query": {
      "Country": "GB",
      "Currency": "GBP",
      "Locale": "en-GB",
      "Adults": 1,
      "Children": 0,
      "Infants": 0,
      "OriginPlace": "2343",
      "DestinationPlace": "13554",
      "OutboundDate": "2019-06-14",
      "InboundDate": "2019-06-21",
      "LocationSchema": "Default",
      "CabinClass": "economy",
      "GroupPricing": false
    },
    "Status": "UpdatesComplete",
    "Itineraries": [
      {
        "OutboundLegId": {
          "Id": "11235-1906141135--32753-1-13554-1906142020",
          "SegmentIds": [
            0,
            1
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "Departure": "2019-06-14T11:35:00",
          "Arrival": "2019-06-14T20:20:00",
          "Duration": 525,
          "JourneyMode": "Flight",
          "Stops": [
            {
              "Id": 11154,
              "ParentId": 2277,
              "Code": "DUB",
              "Type": "Airport",
              "Name": "Dublin"
            }
          ],
          "Carriers": [
            {
              "Id": 1033,
              "Code": "EI",
              "Name": "Aer Lingus",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
              "DisplayCode": "EI"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1653,
              "Code": "RE",
              "Name": "Stobart Air",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/RE.png",
              "DisplayCode": "RE"
            },
            {
              "Id": 1033,
              "Code": "EI",
              "Name": "Aer Lingus",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
              "DisplayCode": "EI"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "3253",
              "CarrierId": 1033,
              "Carrier": {
                "Id": 1033,
                "Code": "EI",
                "Name": "Aer Lingus",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
                "DisplayCode": "EI"
              }
            },
            {
              "FlightNumber": "182",
              "CarrierId": 1033,
              "Carrier": {
                "Id": 1033,
                "Code": "EI",
                "Name": "Aer Lingus",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
                "DisplayCode": "EI"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "13554-1906210640--32302-0-11235-1906210825",
          "SegmentIds": [
            2
          ],
          "OriginStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2019-06-21T06:40:00",
          "Arrival": "2019-06-21T08:25:00",
          "Duration": 105,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2100",
              "CarrierId": 885,
              "Carrier": {
                "Id": 885,
                "Code": "BE",
                "Name": "Flybe",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
                "DisplayCode": "BE"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 2628363,
                "Name": "GotoGate",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/gtuk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 133,
            "Price": 385.66,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fgtuk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32753%7c3253%7c11235%7c2019-06-14T11%3a35%7c11154%7c2019-06-14T12%3a50%7c75%7c-%7c-%7c-%3bflight%7c-32753%7c182%7c11154%7c2019-06-14T19%3a00%7c13554%7c2019-06-14T20%3a20%7c80%7c-%7c-%7c-%2cflight%7c-32302%7c2100%7c13554%7c2019-06-21T06%3a40%7c11235%7c2019-06-21T08%3a25%7c105%7c-%7c-%7c-%26carriers%3d-32753%2c-32302%26operators%3d-32754%3b-32753%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d385.66%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dgtuk.11235.13554.190614.190621.1..E%7c-2961785954513536496%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T08%3a12%3a00%26pqid%3dfalse"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/998751ac-eaeb-4298-9a53-ba94b6c47b4a/booking",
          "Body": "OutboundLegId=11235-1906141135--32753-1-13554-1906142020&InboundLegId=13554-1906210640--32302-0-11235-1906210825",
          "Method": "PUT"
        },
        "FormattedData": "GotoGate: 385.66 GBP"
      },
      {
        "OutboundLegId": {
          "Id": "11235-1906140605--32478-1-13554-1906141015",
          "SegmentIds": [
            3,
            4
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "Departure": "2019-06-14T06:05:00",
          "Arrival": "2019-06-14T10:15:00",
          "Duration": 250,
          "JourneyMode": "Flight",
          "Stops": [
            {
              "Id": 10141,
              "ParentId": 1178,
              "Code": "BRU",
              "Type": "Airport",
              "Name": "Brussels International"
            }
          ],
          "Carriers": [
            {
              "Id": 1710,
              "Code": "SN",
              "Name": "Brussels Airlines",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
              "DisplayCode": "SN"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1710,
              "Code": "SN",
              "Name": "Brussels Airlines",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
              "DisplayCode": "SN"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2066",
              "CarrierId": 1710,
              "Carrier": {
                "Id": 1710,
                "Code": "SN",
                "Name": "Brussels Airlines",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
                "DisplayCode": "SN"
              }
            },
            {
              "FlightNumber": "2093",
              "CarrierId": 1710,
              "Carrier": {
                "Id": 1710,
                "Code": "SN",
                "Name": "Brussels Airlines",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
                "DisplayCode": "SN"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "13554-1906210640--32302-0-11235-1906210825",
          "SegmentIds": [
            2
          ],
          "OriginStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2019-06-21T06:40:00",
          "Arrival": "2019-06-21T08:25:00",
          "Duration": 105,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2100",
              "CarrierId": 885,
              "Carrier": {
                "Id": 885,
                "Code": "BE",
                "Name": "Flybe",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
                "DisplayCode": "BE"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 1963108,
                "Name": "Mytrip",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/at24.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 133,
            "Price": 413.95,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fat24%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32478%7c2066%7c11235%7c2019-06-14T06%3a05%7c10141%7c2019-06-14T08%3a40%7c95%7c-%7c-%7c-%3bflight%7c-32478%7c2093%7c10141%7c2019-06-14T09%3a50%7c13554%7c2019-06-14T10%3a15%7c85%7c-%7c-%7c-%2cflight%7c-32302%7c2100%7c13554%7c2019-06-21T06%3a40%7c11235%7c2019-06-21T08%3a25%7c105%7c-%7c-%7c-%26carriers%3d-32478%2c-32302%26operators%3d-32478%3b-32478%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d413.95%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dat24.11235.13554.190614.190621.1..E%7c-6428490236853376228%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T08%3a12%3a00%26pqid%3dfalse"
          },
          {
            "Agents": [
              {
                "Id": 3165195,
                "Name": "lastminute.com",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/lmuk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 0,
            "Price": 428.11,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2flmuk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32478%7c2066%7c11235%7c2019-06-14T06%3a05%7c10141%7c2019-06-14T08%3a40%7c95%7cURCLRTM0%7cU%7c-%3bflight%7c-32478%7c2093%7c10141%7c2019-06-14T09%3a50%7c13554%7c2019-06-14T10%3a15%7c85%7cTRCLRTM0%7cT%7c-%2cflight%7c-32302%7c2100%7c13554%7c2019-06-21T06%3a40%7c11235%7c2019-06-21T08%3a25%7c105%7cUWWW2S%7cU%7c-%26carriers%3d-32478%2c-32302%26operators%3d-32478%3b-32478%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d428.11%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dlmuk.11235.13554.190614.190621.1..E%7c-7884963746279253866%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T10%3a25%3a00%26pqid%3dfalse"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/998751ac-eaeb-4298-9a53-ba94b6c47b4a/booking",
          "Body": "OutboundLegId=11235-1906140605--32478-1-13554-1906141015&InboundLegId=13554-1906210640--32302-0-11235-1906210825",
          "Method": "PUT"
        },
        "FormattedData": "Mytrip: 413.95 GBP lastminute.com: 428.11 GBP"
      },
      {
        "OutboundLegId": {
          "Id": "11235-1906140850--32302-0-13554-1906141035",
          "SegmentIds": [
            5
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "Departure": "2019-06-14T08:50:00",
          "Arrival": "2019-06-14T10:35:00",
          "Duration": 105,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2103",
              "CarrierId": 885,
              "Carrier": {
                "Id": 885,
                "Code": "BE",
                "Name": "Flybe",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
                "DisplayCode": "BE"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "13554-1906211515--32480,-32302-1-11235-1906212110",
          "SegmentIds": [
            6,
            7
          ],
          "OriginStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2019-06-21T15:15:00",
          "Arrival": "2019-06-21T21:10:00",
          "Duration": 355,
          "JourneyMode": "Flight",
          "Stops": [
            {
              "Id": 9889,
              "ParentId": 876,
              "Code": "BHD",
              "Type": "Airport",
              "Name": "Belfast City"
            }
          ],
          "Carriers": [
            {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            },
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1033,
              "Code": "EI",
              "Name": "Aer Lingus",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
              "DisplayCode": "EI"
            },
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2135",
              "CarrierId": 881,
              "Carrier": {
                "Id": 881,
                "Code": "BA",
                "Name": "British Airways",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
                "DisplayCode": "BA"
              }
            },
            {
              "FlightNumber": "696",
              "CarrierId": 885,
              "Carrier": {
                "Id": 885,
                "Code": "BE",
                "Name": "Flybe",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
                "DisplayCode": "BE"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 3165195,
                "Name": "lastminute.com",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/lmuk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 0,
            "Price": 387.61,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2flmuk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32302%7c2103%7c11235%7c2019-06-14T08%3a50%7c13554%7c2019-06-14T10%3a35%7c105%7cOWWW1S%7cO%7c-%2cflight%7c-32480%7c2135%7c13554%7c2019-06-21T15%3a15%7c9889%7c2019-06-21T16%3a40%7c85%7cHEIRO%7cH%7c-%3bflight%7c-32302%7c696%7c9889%7c2019-06-21T20%3a15%7c11235%7c2019-06-21T21%3a10%7c55%7cVFLY1S%7cV%7c-%26carriers%3d-32302%2c-32480%26operators%3d-32302%2c-32753%3b-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d387.61%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dlmuk.11235.13554.190614.190621.1..E%7c5054937309174344870%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T10%3a25%3a00%26pqid%3dfalse"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/998751ac-eaeb-4298-9a53-ba94b6c47b4a/booking",
          "Body": "OutboundLegId=11235-1906140850--32302-0-13554-1906141035&InboundLegId=13554-1906211515--32480,-32302-1-11235-1906212110",
          "Method": "PUT"
        },
        "FormattedData": "lastminute.com: 387.61 GBP"
      },
      {
        "OutboundLegId": {
          "Id": "11235-1906141605--32480-0-13554-1906141730",
          "SegmentIds": [
            8
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "Departure": "2019-06-14T16:05:00",
          "Arrival": "2019-06-14T17:30:00",
          "Duration": 85,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "1447",
              "CarrierId": 881,
              "Carrier": {
                "Id": 881,
                "Code": "BA",
                "Name": "British Airways",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
                "DisplayCode": "BA"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "13554-1906211520--32480-0-11235-1906211645",
          "SegmentIds": [
            9
          ],
          "OriginStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2019-06-21T15:20:00",
          "Arrival": "2019-06-21T16:45:00",
          "Duration": 85,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "1448",
              "CarrierId": 881,
              "Carrier": {
                "Id": 881,
                "Code": "BA",
                "Name": "British Airways",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
                "DisplayCode": "BA"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 2032127,
                "Name": "British Airways",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/ba__.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "Airline"
              }
            ],
            "QuoteAgeInMinutes": 133,
            "Price": 288.06,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fba__%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-32480%7c1447%7c11235%7c2019-06-14T16%3a05%7c13554%7c2019-06-14T17%3a30%7c85%7cKTM0Z0R%7cK%7cBasic%2cflight%7c-32480%7c1448%7c13554%7c2019-06-21T15%3a20%7c11235%7c2019-06-21T16%3a45%7c85%7cKEM0Z0R%7cK%7cBasic%26carriers%3d-32480%26operators%3d-32480%2c-32480%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d288.06%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dba__.11235.13554.190614.190621.1..E%7c-3939586257580687101%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T08%3a12%3a00%26source_website_id%3damac%26pqid%3dfalse"
          },
          {
            "Agents": [
              {
                "Id": 3874827,
                "Name": "BudgetAir",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/s1uk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 133,
            "Price": 332,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fs1uk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1447%7c11235%7c2019-06-14T16%3a05%7c13554%7c2019-06-14T17%3a30%7c85%7c-%7c-%7c-%2cflight%7c-32480%7c1448%7c13554%7c2019-06-21T15%3a20%7c11235%7c2019-06-21T16%3a45%7c85%7c-%7c-%7c-%26carriers%3d-32480%26operators%3d-32480%2c-32480%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d332.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3ds1uk.11235.13554.190614.190621.1..E%7c1954476104428599614%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T08%3a12%3a00%26pqid%3dfalse"
          },
          {
            "Agents": [
              {
                "Id": 3165195,
                "Name": "lastminute.com",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/lmuk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 0,
            "Price": 341.54,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2flmuk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1447%7c11235%7c2019-06-14T16%3a05%7c13554%7c2019-06-14T17%3a30%7c85%7cKM0Z0R%7cK%7c-%2cflight%7c-32480%7c1448%7c13554%7c2019-06-21T15%3a20%7c11235%7c2019-06-21T16%3a45%7c85%7cKM0Z0R%7cK%7c-%26carriers%3d-32480%26operators%3d-32480%2c-32480%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d341.54%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dlmuk.11235.13554.190614.190621.1..E%7c859018739371977246%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T10%3a25%3a00%26pqid%3dfalse"
          },
          {
            "Agents": [
              {
                "Id": 4499211,
                "Name": "Expedia",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/xpuk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 133,
            "Price": 431.06,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fxpuk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1447%7c11235%7c2019-06-14T16%3a05%7c13554%7c2019-06-14T17%3a30%7c85%7cKZ0RO%7cK%7c-%2cflight%7c-32480%7c1448%7c13554%7c2019-06-21T15%3a20%7c11235%7c2019-06-21T16%3a45%7c85%7cKZ0RO%7cK%7c-%26carriers%3d-32480%26operators%3d-32480%2c-32480%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d431.06%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dxpuk.11235.13554.190614.190621.1..E%7c-2208430955994261094%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T08%3a12%3a00%26pqid%3dfalse"
          },
          {
            "Agents": [
              {
                "Id": 3934928,
                "Name": "Kiwi.com",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/skyp.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 0,
            "Price": 439,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fskyp%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1447%7c11235%7c2019-06-14T16%3a05%7c13554%7c2019-06-14T17%3a30%7c85%7cKEZ0RO%7cM%7c-%2cflight%7c-32480%7c1448%7c13554%7c2019-06-21T15%3a20%7c11235%7c2019-06-21T16%3a45%7c85%7cMWZ0RO%7cM%7c-%26carriers%3d-32480%26operators%3d-32480%2c-32480%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dtrue%26ticket_price%3d439.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dskyp.11235.13554.190614.190621.1..E%7c-1521071208497418752%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T10%3a25%3a00%26pqid%3dfalse"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/998751ac-eaeb-4298-9a53-ba94b6c47b4a/booking",
          "Body": "OutboundLegId=11235-1906141605--32480-0-13554-1906141730&InboundLegId=13554-1906211520--32480-0-11235-1906211645",
          "Method": "PUT"
        },
        "FormattedData": "British Airways: 288.06 GBP BudgetAir: 332 GBP lastminute.com: 341.54 GBP Expedia: 431.06 GBP Kiwi.com: 439 GBP"
      },
      {
        "OutboundLegId": {
          "Id": "11235-1906141005--32480-0-13554-1906141140",
          "SegmentIds": [
            10
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "Departure": "2019-06-14T10:05:00",
          "Arrival": "2019-06-14T11:40:00",
          "Duration": 95,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "1441",
              "CarrierId": 881,
              "Carrier": {
                "Id": 881,
                "Code": "BA",
                "Name": "British Airways",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
                "DisplayCode": "BA"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "13554-1906212045--32302-0-11235-1906212220",
          "SegmentIds": [
            11
          ],
          "OriginStation": {
            "Id": 13554,
            "ParentId": 4698,
            "Code": "LHR",
            "Type": "Airport",
            "Name": "London Heathrow"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2019-06-21T20:45:00",
          "Arrival": "2019-06-21T22:20:00",
          "Duration": 95,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2110",
              "CarrierId": 885,
              "Carrier": {
                "Id": 885,
                "Code": "BE",
                "Name": "Flybe",
                "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
                "DisplayCode": "BE"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 4499211,
                "Name": "Expedia",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/xpuk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 133,
            "Price": 300.06,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fxpuk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1441%7c11235%7c2019-06-14T10%3a05%7c13554%7c2019-06-14T11%3a40%7c95%7cKZ0RO%7cK%7c-%2cflight%7c-32302%7c2110%7c13554%7c2019-06-21T20%3a45%7c11235%7c2019-06-21T22%3a20%7c95%7cVFLYHS%7cV%7c-%26carriers%3d-32480%2c-32302%26operators%3d-32480%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d300.06%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dxpuk.11235.13554.190614.190621.1..E%7c1300505275295868738%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T08%3a12%3a00%26pqid%3dfalse"
          },
          {
            "Agents": [
              {
                "Id": 3934928,
                "Name": "Kiwi.com",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/skyp.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 0,
            "Price": 320,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fskyp%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1441%7c11235%7c2019-06-14T10%3a05%7c13554%7c2019-06-14T11%3a40%7c95%7cKEZ0RO%7cM%7c-%2cflight%7c-32302%7c2110%7c13554%7c2019-06-21T20%3a45%7c11235%7c2019-06-21T22%3a20%7c95%7c-%7c-%7c-%26carriers%3d-32480%2c-32302%26operators%3d-32480%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dtrue%26ticket_price%3d320.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dskyp.11235.13554.190614.190621.1..E%7c-4738404089517268554%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T10%3a25%3a00%26pqid%3dfalse"
          },
          {
            "Agents": [
              {
                "Id": 3165195,
                "Name": "lastminute.com",
                "ImageUrl": "https://s1.apideeplink.com/images/websites/lmuk.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "Type": "TravelAgent"
              }
            ],
            "QuoteAgeInMinutes": 0,
            "Price": 329.82,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2flmuk%2f2%2f11235.13554.2019-06-14%2c13554.11235.2019-06-21%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1441%7c11235%7c2019-06-14T10%3a05%7c13554%7c2019-06-14T11%3a40%7c95%7cKPZ0RO%7cK%7c-%2cflight%7c-32302%7c2110%7c13554%7c2019-06-21T20%3a45%7c11235%7c2019-06-21T22%3a20%7c95%7cOFLY2H%7cO%7c-%26carriers%3d-32480%2c-32302%26operators%3d-32480%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d329.82%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dlmuk.11235.13554.190614.190621.1..E%7c-4815970172110980098%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-06-07T10%3a25%3a00%26pqid%3dfalse"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/998751ac-eaeb-4298-9a53-ba94b6c47b4a/booking",
          "Body": "OutboundLegId=11235-1906141005--32480-0-13554-1906141140&InboundLegId=13554-1906212045--32302-0-11235-1906212220",
          "Method": "PUT"
        },
        "FormattedData": "Expedia: 300.06 GBP Kiwi.com: 320 GBP lastminute.com: 329.82 GBP"
      }
    ],
    "Legs": [
      {
        "Id": "11235-1906141135--32753-1-13554-1906142020",
        "SegmentIds": [
          0,
          1
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13554,
          "ParentId": 4698,
          "Code": "LHR",
          "Type": "Airport",
          "Name": "London Heathrow"
        },
        "Departure": "2019-06-14T11:35:00",
        "Arrival": "2019-06-14T20:20:00",
        "Duration": 525,
        "JourneyMode": "Flight",
        "Stops": [
          {
            "Id": 11154,
            "ParentId": 2277,
            "Code": "DUB",
            "Type": "Airport",
            "Name": "Dublin"
          }
        ],
        "Carriers": [
          {
            "Id": 1033,
            "Code": "EI",
            "Name": "Aer Lingus",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
            "DisplayCode": "EI"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 1653,
            "Code": "RE",
            "Name": "Stobart Air",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/RE.png",
            "DisplayCode": "RE"
          },
          {
            "Id": 1033,
            "Code": "EI",
            "Name": "Aer Lingus",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
            "DisplayCode": "EI"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "3253",
            "CarrierId": 1033,
            "Carrier": {
              "Id": 1033,
              "Code": "EI",
              "Name": "Aer Lingus",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
              "DisplayCode": "EI"
            }
          },
          {
            "FlightNumber": "182",
            "CarrierId": 1033,
            "Carrier": {
              "Id": 1033,
              "Code": "EI",
              "Name": "Aer Lingus",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
              "DisplayCode": "EI"
            }
          }
        ]
      },
      {
        "Id": "11235-1906140605--32478-1-13554-1906141015",
        "SegmentIds": [
          3,
          4
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13554,
          "ParentId": 4698,
          "Code": "LHR",
          "Type": "Airport",
          "Name": "London Heathrow"
        },
        "Departure": "2019-06-14T06:05:00",
        "Arrival": "2019-06-14T10:15:00",
        "Duration": 250,
        "JourneyMode": "Flight",
        "Stops": [
          {
            "Id": 10141,
            "ParentId": 1178,
            "Code": "BRU",
            "Type": "Airport",
            "Name": "Brussels International"
          }
        ],
        "Carriers": [
          {
            "Id": 1710,
            "Code": "SN",
            "Name": "Brussels Airlines",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
            "DisplayCode": "SN"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 1710,
            "Code": "SN",
            "Name": "Brussels Airlines",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
            "DisplayCode": "SN"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "2066",
            "CarrierId": 1710,
            "Carrier": {
              "Id": 1710,
              "Code": "SN",
              "Name": "Brussels Airlines",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
              "DisplayCode": "SN"
            }
          },
          {
            "FlightNumber": "2093",
            "CarrierId": 1710,
            "Carrier": {
              "Id": 1710,
              "Code": "SN",
              "Name": "Brussels Airlines",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
              "DisplayCode": "SN"
            }
          }
        ]
      },
      {
        "Id": "11235-1906140850--32302-0-13554-1906141035",
        "SegmentIds": [
          5
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13554,
          "ParentId": 4698,
          "Code": "LHR",
          "Type": "Airport",
          "Name": "London Heathrow"
        },
        "Departure": "2019-06-14T08:50:00",
        "Arrival": "2019-06-14T10:35:00",
        "Duration": 105,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 885,
            "Code": "BE",
            "Name": "Flybe",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
            "DisplayCode": "BE"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 885,
            "Code": "BE",
            "Name": "Flybe",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
            "DisplayCode": "BE"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "2103",
            "CarrierId": 885,
            "Carrier": {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          }
        ]
      },
      {
        "Id": "11235-1906141605--32480-0-13554-1906141730",
        "SegmentIds": [
          8
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13554,
          "ParentId": 4698,
          "Code": "LHR",
          "Type": "Airport",
          "Name": "London Heathrow"
        },
        "Departure": "2019-06-14T16:05:00",
        "Arrival": "2019-06-14T17:30:00",
        "Duration": 85,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 881,
            "Code": "BA",
            "Name": "British Airways",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
            "DisplayCode": "BA"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 881,
            "Code": "BA",
            "Name": "British Airways",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
            "DisplayCode": "BA"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "1447",
            "CarrierId": 881,
            "Carrier": {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          }
        ]
      },
      {
        "Id": "11235-1906141005--32480-0-13554-1906141140",
        "SegmentIds": [
          10
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13554,
          "ParentId": 4698,
          "Code": "LHR",
          "Type": "Airport",
          "Name": "London Heathrow"
        },
        "Departure": "2019-06-14T10:05:00",
        "Arrival": "2019-06-14T11:40:00",
        "Duration": 95,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 881,
            "Code": "BA",
            "Name": "British Airways",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
            "DisplayCode": "BA"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 881,
            "Code": "BA",
            "Name": "British Airways",
            "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
            "DisplayCode": "BA"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "1441",
            "CarrierId": 881,
            "Carrier": {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          }
        ]
      }
    ],
    "Segments": [
      {
        "Id": 0,
        "OriginStation": 11235,
        "DestinationStation": 11154,
        "DepartureDateTime": "2019-06-14T11:35:00",
        "ArrivalDateTime": "2019-06-14T12:50:00",
        "Carrier": 1033,
        "OperatingCarrier": 1653,
        "Duration": 75,
        "FlightNumber": "3253",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      },
      {
        "Id": 1,
        "OriginStation": 11154,
        "DestinationStation": 13554,
        "DepartureDateTime": "2019-06-14T19:00:00",
        "ArrivalDateTime": "2019-06-14T20:20:00",
        "Carrier": 1033,
        "OperatingCarrier": 1033,
        "Duration": 80,
        "FlightNumber": "182",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      },
      {
        "Id": 2,
        "OriginStation": 13554,
        "DestinationStation": 11235,
        "DepartureDateTime": "2019-06-21T06:40:00",
        "ArrivalDateTime": "2019-06-21T08:25:00",
        "Carrier": 885,
        "OperatingCarrier": 885,
        "Duration": 105,
        "FlightNumber": "2100",
        "JourneyMode": "Flight",
        "Directionality": "Inbound"
      },
      {
        "Id": 3,
        "OriginStation": 11235,
        "DestinationStation": 10141,
        "DepartureDateTime": "2019-06-14T06:05:00",
        "ArrivalDateTime": "2019-06-14T08:40:00",
        "Carrier": 1710,
        "OperatingCarrier": 1710,
        "Duration": 95,
        "FlightNumber": "2066",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      },
      {
        "Id": 4,
        "OriginStation": 10141,
        "DestinationStation": 13554,
        "DepartureDateTime": "2019-06-14T09:50:00",
        "ArrivalDateTime": "2019-06-14T10:15:00",
        "Carrier": 1710,
        "OperatingCarrier": 1710,
        "Duration": 85,
        "FlightNumber": "2093",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      }
    ],
    "Carriers": [
      {
        "Id": 1653,
        "Code": "RE",
        "Name": "Stobart Air",
        "ImageUrl": "https://s1.apideeplink.com/images/airlines/RE.png",
        "DisplayCode": "RE"
      },
      {
        "Id": 1033,
        "Code": "EI",
        "Name": "Aer Lingus",
        "ImageUrl": "https://s1.apideeplink.com/images/airlines/EI.png",
        "DisplayCode": "EI"
      },
      {
        "Id": 885,
        "Code": "BE",
        "Name": "Flybe",
        "ImageUrl": "https://s1.apideeplink.com/images/airlines/BE.png",
        "DisplayCode": "BE"
      },
      {
        "Id": 1710,
        "Code": "SN",
        "Name": "Brussels Airlines",
        "ImageUrl": "https://s1.apideeplink.com/images/airlines/SN.png",
        "DisplayCode": "SN"
      },
      {
        "Id": 881,
        "Code": "BA",
        "Name": "British Airways",
        "ImageUrl": "https://s1.apideeplink.com/images/airlines/BA.png",
        "DisplayCode": "BA"
      }
    ],
    "Agents": [
      {
        "Id": 2409351,
        "Name": "eurowings",
        "ImageUrl": "https://s1.apideeplink.com/images/websites/eurw.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "Airline"
      },
      {
        "Id": 4288780,
        "Name": "Vueling Airlines",
        "ImageUrl": "https://s1.apideeplink.com/images/websites/vuel.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "Airline"
      },
      {
        "Id": 2363321,
        "Name": "easyJet",
        "ImageUrl": "https://s1.apideeplink.com/images/websites/easy.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "Airline"
      },
      {
        "Id": 1887169,
        "Name": "telme",
        "ImageUrl": "https://s1.apideeplink.com/images/websites/a341.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": false,
        "Type": "TravelAgent"
      },
      {
        "Id": 1963108,
        "Name": "Mytrip",
        "ImageUrl": "https://s1.apideeplink.com/images/websites/at24.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "TravelAgent"
      }
    ],
    "Places": [
      {
        "Id": 18563,
        "ParentId": 9168,
        "Code": "ZRH",
        "Type": "Airport",
        "Name": "Zurich"
      },
      {
        "Id": 14855,
        "ParentId": 5684,
        "Code": "NWI",
        "Type": "Airport",
        "Name": "Norwich"
      },
      {
        "Id": 4872,
        "ParentId": 247,
        "Code": "MAN",
        "Type": "City",
        "Name": "Manchester"
      },
      {
        "Id": 11154,
        "ParentId": 2277,
        "Code": "DUB",
        "Type": "Airport",
        "Name": "Dublin"
      },
      {
        "Id": 3091,
        "ParentId": 252,
        "Code": "HAM",
        "Type": "City",
        "Name": "Hamburg"
      }
    ],
    "Currencies": [
      {
        "Code": "GBP",
        "Symbol": "£",
        "ThousandsSeparator": ",",
        "DecimalSeparator": ".",
        "SymbolOnLeft": true,
        "SpaceBetweenAmountAndSymbol": false,
        "RoundingCoefficient": 0,
        "DecimalDigits": 2
      }
    ],
    "ServiceQuery": {
      "DateTime": "2019-06-07T10:25:24.3951688Z"
    }
  },
  "Query": {
    "Country": "GB",
    "Currency": "GBP",
    "Locale": "en-GB",
    "Adults": 1,
    "Children": 0,
    "Infants": 0,
    "OriginPlace": "2343",
    "DestinationPlace": "13554",
    "OutboundDate": "2019-06-14",
    "InboundDate": "2019-06-21",
    "LocationSchema": "Default",
    "CabinClass": "economy",
    "GroupPricing": false
  }
};
