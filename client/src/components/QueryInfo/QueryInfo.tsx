import React from 'react';
import IQueryInfoProps from './QueryInfoProps';
import './QueryInfo.css';

const QueryInfo: React.FC<IQueryInfoProps> = (props: IQueryInfoProps) => (
  <div className="query-info">
    <div className="direction-info">
      {props.fromCode}
      <span>&nbsp;&#10140;&nbsp;</span>
      {props.toCode}
    </div>
    <div className="travellers-info">{props.travellersCount} travellers, {props.cabinClass}</div>
  </div>
)

export default QueryInfo;
