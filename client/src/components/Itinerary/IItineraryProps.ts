import LegProps from "../Leg/LegProps";

export default interface IItineraryProps {
  outboundLeg: LegProps;
  inboundLeg: LegProps;
  price: number;
}
