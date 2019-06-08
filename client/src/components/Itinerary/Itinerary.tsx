import React from 'react';
import Leg from '../Leg';
import IItineraryProps from './IItineraryProps';

const Itinerary: React.FC<IItineraryProps> = (props: IItineraryProps) => (
  <React.Fragment>

    <div className="card">
      <div className="card-body">
        <Leg {...props.outboundLeg} />
        <Leg {...props.inboundLeg} />
      </div>
    </div>



  </React.Fragment>
)

export default Itinerary
