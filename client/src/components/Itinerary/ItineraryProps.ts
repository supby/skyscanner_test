import LegProps from "../Leg/LegProps";

export default interface IItineraryProps {
  id: string;
  outboundLeg: LegProps;
  inboundLeg: LegProps;
  price: number;
  currencySymbol: string;
}
