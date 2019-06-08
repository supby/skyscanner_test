import React from 'react';
import LegProps from '../Leg/LegProps';
import Leg from '../Leg';
import IItineraryProps from './IItineraryProps';

const Itinerary: React.FC<IItineraryProps> = (props: IItineraryProps) => (
  <React.Fragment>
    <Leg {...props.outboundLeg} />
    <Leg {...props.inboundLeg} />
  </React.Fragment>
)

export default Itinerary
