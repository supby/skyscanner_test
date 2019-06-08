import React from 'react';
import LegProps from './LegProps';

const Leg: React.FC<LegProps> = (props: LegProps) => (
  <div>{`${props.originStationCode} -> ${props.destinationStationCode}`}</div>)

export default Leg
