import React from 'react';
import Itinerary from '../Itinerary'
import IItineraryProps from '../Itinerary/ItineraryProps';
import './Itineraries.css';

interface IItinerariesProps {
  itineraries: IItineraryProps[];
  isLoading: boolean;
}

const Itineraries: React.FC<IItinerariesProps> = (props: IItinerariesProps) => (
  <div className="bkp-itineraries">
    {props.isLoading &&
      (<div className="spinner-border m-5 it-spinner" role="status">
        <span className="sr-only">Loading...</span>
      </div>)}
    {!props.isLoading && props.itineraries.map(i => <Itinerary key={i.id} {...i} />)}
  </div>
);

export default Itineraries;
