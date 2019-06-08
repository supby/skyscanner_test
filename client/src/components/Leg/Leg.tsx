import React from 'react';
import LegProps from './LegProps';
import './Leg.css';

const Leg: React.FC<LegProps> = (props: LegProps) => (
  <div className="container leg-container">
    <div className="row">
      <div className="col-1 leg-col">
        E
      </div>
      <div className="col-2 leg-col">
        <div>7:00</div>
        <div className="leg-place-code">{props.originStationCode}</div>
      </div>
      <div className="col-1 leg-col leg-arrow">
        <span>&nbsp;&#10140;&nbsp;</span>
      </div>
      <div className="col-2 leg-col">
        <div>12:00</div>
        <div className="leg-place-code">{props.destinationStationCode}</div>
      </div>
      <div className="col leg-col leg-col-last">
        <div className="leg-duration">1h 25</div>
        <div className="leg-direct">Direct</div>
      </div>

    </div>
  </div>
)

export default Leg
