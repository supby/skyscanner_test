import React from 'react';
import Leg from '../Leg';
import IItineraryProps from './ItineraryProps';
import './Itinerary.css';

const Itinerary: React.FC<IItineraryProps> = (props: IItineraryProps) => (
  <div className="card bkp-itinerary">
    <div className="card-body it-card-body">
      <Leg {...props.outboundLeg} />
      <Leg {...props.inboundLeg} />
      <div className="container">
        <div className="row">
          <div className="col it-price-col">{`${props.currencySymbol} ${props.price}`}</div>
          <div className="col it-select-col">
            <button type="button" className="btn btn-sm it-select-btn">Select</button>
          </div>
        </div>


      </div>
    </div>
  </div>)

export default Itinerary
