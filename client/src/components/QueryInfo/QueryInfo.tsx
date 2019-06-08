import React from 'react';
import IQueryInfoProps from './QueryInfoProps';
import './QueryInfo.css';

const QueryInfo: React.FC<IQueryInfoProps> = (props: IQueryInfoProps) => (
  <div className="query-info">
    <div className="direction-info">
      {props.fromCode}
      <span>&#10140;</span>
      {props.toCode}
    </div>
    <div className="travellers-info">2 travellers, economy</div>
  </div>
)

export default QueryInfo
;
