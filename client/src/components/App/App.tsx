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

  async getData() {
    const res = await fetch(`http://localhost:4000/api/search/${this.state.query.origin}/${this.state.query.destination}/${this.state.query.outbounddate}/${this.state.query.inbounddate}/${this.state.query.adults}/${this.state.query.children}/${this.state.query.infants}`);
    if (res.status !== 200) {
      console.error(`API call is failed: ${res.statusText}`);
      return;
    }
    return res.json();
  }

  async componentDidMount() {
    const data = await this.getData();
    this.setState({ ...data })
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
