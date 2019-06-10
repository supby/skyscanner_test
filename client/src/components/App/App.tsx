import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Itineraries from '../Itineraries'
import IItineraryProps from '../Itinerary/ItineraryProps';
import QueryInfo from '../QueryInfo'
import ToolBar from '../ToolBar'
import IQueryProps from '../QueryInfo/QueryInfoProps';
import moment from 'moment';

// TODO: implement query box, now hardcoded
const nextMonday = moment().add(1, 'weeks').day(1);
const testQuery = {
  origin: 'EDI',
  destination: 'LHR',
  outbounddate: nextMonday.format('YYYY-MM-DD'),
  inbounddate: nextMonday.add(1, 'day').format('YYYY-MM-DD'),
  adults: 2,
  children: 1,
  infants: 0,
  cabinClass: 'Economy'
};

// TODO: move to redux global state
interface IAppState {
  query: IQueryProps;
  itineraries: IItineraryProps[];
  isLoading: boolean;
}

export default class App extends Component<{}, IAppState> {
  constructor(props) {
    super(props);

    this.state = {
      query: testQuery,
      itineraries: [],
      isLoading: true
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
    this.setState({ ...data, isLoading: false });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <QueryInfo {...this.state.query} />
          <ToolBar />
          <Itineraries isLoading={this.state.isLoading} itineraries={this.state.itineraries} />
        </main>
      </div>
    );
  }
}
