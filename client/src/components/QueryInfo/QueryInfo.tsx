import React from 'react';
import IQueryProps from './QueryInfoProps';
import './QueryInfo.css';

const QueryInfo: React.FC<IQueryProps> = (props: IQueryProps) => (
  <div className="query-info">
    <div className="direction-info">
      {props.origin}
      <span>&nbsp;&#10140;&nbsp;</span>
      {props.destination}
    </div>
    <div className="travellers-info">
      {props.adults + props.children + props.infants} travellers, {props.cabinClass}
    </div>
  </div>
)

export default QueryInfo;
