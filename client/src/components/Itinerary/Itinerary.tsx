import React from 'react';
import Leg from '../Leg';
import IItineraryProps from './ItineraryProps';
import './Itinerary.css';

const Itinerary: React.FC<IItineraryProps> = (props: IItineraryProps) => (
  <div className="card bkp-itinerary">
    <div className="card-body">
      <Leg {...props.outboundLeg} />
      <Leg {...props.inboundLeg} />
    </div>
  </div>)

export default Itinerary
