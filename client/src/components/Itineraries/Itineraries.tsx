import React from 'react';
import Itinerary from '../Itinerary'
import IItineraryProps from '../Itinerary/ItineraryProps';

interface IItinerariesProps {
  itineraries: IItineraryProps[];
}

const Itineraries: React.FC<IItinerariesProps> = (props:IItinerariesProps) => (
  <React.Fragment>
    { props.itineraries.map(i => <Itinerary key={i.id} {...i} />) }
  </React.Fragment>
);

export default Itineraries;
