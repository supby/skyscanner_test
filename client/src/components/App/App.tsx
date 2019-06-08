import React from 'react';
import './App.css';
import Header from '../Header';
import Itineraries from '../Itineraries'
import testApiData from '../../data/testApiData'
import IItineraryProps from '../Itinerary/IItineraryProps';

// TODO: replace by API call
const testData: IItineraryProps[] = testApiData.Flights.Itineraries.map(i => {
  return {
    outboundLeg: {
      originStationCode: i.OutboundLegId.OriginStation.Code,
      destinationStationCode: i.OutboundLegId.DestinationStation.Code,
      departureDate: i.OutboundLegId.Departure,
      arrivalDate: i.OutboundLegId.Arrival,
      duration: i.OutboundLegId.Duration,
      stopsCount: i.OutboundLegId.Stops.length
    },
    inboundLeg: {
      originStationCode: i.InboundLegId.OriginStation.Code,
      destinationStationCode: i.InboundLegId.DestinationStation.Code,
      departureDate: i.InboundLegId.Departure,
      arrivalDate: i.InboundLegId.Arrival,
      duration: i.InboundLegId.Duration,
      stopsCount: i.InboundLegId.Stops.length
    },
    price: i.PricingOptions[0].Price
  }
});

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Itineraries itineraries={testData} />
      </main>
    </div>
  );
}

export default App;
