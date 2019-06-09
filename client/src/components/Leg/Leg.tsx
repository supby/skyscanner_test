import React from 'react';
import LegProps from './LegProps';
import './Leg.css';
import moment from 'moment';

const Leg: React.FC<LegProps> = (props: LegProps) => (
  <table className="leg-table">
    <colgroup>
      <col width="30" />
      <col width="50" />
      <col width="35" />
      <col width="50" />
    </colgroup>
    <tbody>
      <tr>
        <td className="leg-logo-td" rowSpan={2}>
          <img className="leg-airline-logo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" />
        </td>
        <td>{moment(props.departureDate).format('HH:mm')}</td>
        <td className="leg-arrow" rowSpan={2}>&nbsp;&#10140;&nbsp;</td>
        <td>{moment(props.arrivalDate).format('HH:mm')}</td>
        <td className="leg-last-col leg-duration">
          {`${Math.floor(props.duration / 60)}h ${props.duration % 60}`}
        </td>
      </tr>
      <tr>
        <td className="leg-place-code">{props.originStationCode}</td>
        <td className="leg-place-code">{props.destinationStationCode}</td>
        {props.stopsCount === 0 && <td className="leg-last-col leg-direct">Direct</td>}
        {props.stopsCount > 0 && <td className="leg-last-col leg-indirect">{props.stopsCount} stops</td>}
      </tr>
    </tbody>
  </table>
)

export default Leg
