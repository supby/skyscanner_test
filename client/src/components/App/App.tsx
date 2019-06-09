import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Itineraries from '../Itineraries'
import IItineraryProps from '../Itinerary/ItineraryProps';
import QueryInfo from '../QueryInfo'
import ToolBar from '../ToolBar'
import IQueryProps from '../QueryInfo/QueryInfoProps';

// TODO: implement query box, now hardcoded
const testQuery = {
  origin: 'EDI',
  destination: 'LHR',
  outbounddate: '2019-06-10', //TODO: calculate next monday form now
  inbounddate: '2019-06-11',
  adults: 2,
  children: 1,
  infants: 0,
  cabinClass: 'Economy'
};

// TODO: move to redux global state
interface IAppState {
  query: IQueryProps;
  itineraries: IItineraryProps[];
}

export default class App extends Component<{}, IAppState> {
  constructor(props) {
    super(props);

    this.state = {
      query: testQuery,
      itineraries: []
    }
  }

  // TODO: move api calls to some effects/actions creator (like redux-saga)
  async getData() {
    const res = await fetch(`http://localhost:4000/api/search/${this.state.query.origin}/${this.state.query.destination}/${this.state.query.outbounddate}/${this.state.query.inbounddate}/${this.state.query.adults}/${this.state.query.children}/${this.state.query.infants}`);
    if (res.status !== 200) {
      console.error(`API call is failed: ${res.statusText}`);
      return;
    }
    const data = await res.json();
    console.log(data);
    const itineraries = data.Itineraries.map(i => {
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
        price: i.PricingOptions[0].Price,
        currencySymbol: data.Currencies[0].Symbol
      }
    });
    return itineraries;
  }

  async componentDidMount() {
    const itineraries = await this.getData();
    this.setState({ ...itineraries })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <QueryInfo {...this.state.query} />
          <ToolBar />
          <Itineraries itineraries={this.state.itineraries} />
        </main>
      </div>
    );
  }
}
