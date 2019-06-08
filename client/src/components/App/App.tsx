import React from 'react';
import './App.css';
import Header from '../Header';
import Itineraries from '../Itineraries'
import testApiData from '../../data/testApiData'
import IItineraryProps from '../Itinerary/ItineraryProps';
import QueryInfo from '../QueryInfo'
import ToolBar from '../ToolBar'

// TODO: replace by API call
const testData: IItineraryProps[] = testApiData.Flights.Itineraries.map(i => {
  return {
    id: i.OutboundLegId.Id,
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

const queryInfoTestData = {
  fromCode: testApiData.Query.OriginPlace,
  toCode: testApiData.Query.DestinationPlace,
  travellersCount: testApiData.Query.Adults + testApiData.Query.Children + testApiData.Query.Infants,
  cabinClass: testApiData.Query.CabinClass
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <QueryInfo {...queryInfoTestData}/>
        <ToolBar />
        <Itineraries itineraries={testData} />
      </main>
    </div>
  );
}

export default App;
