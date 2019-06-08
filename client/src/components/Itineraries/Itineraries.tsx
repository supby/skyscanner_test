import React from 'react';
import Itinerary from '../Itinerary'
import IItineraryProps from '../Itinerary/ItineraryProps';
import './Itineraries.css';

interface IItinerariesProps {
  itineraries: IItineraryProps[];
}

const Itineraries: React.FC<IItinerariesProps> = (props:IItinerariesProps) => (
  <div className="bkp-itineraries">
    { props.itineraries.map(i => <Itinerary key={i.id} {...i} />) }
  </div>
);

export default Itineraries;
