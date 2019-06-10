const _ = require('lodash');
const uuidv1 = require('uuid/v1');

const formatPricingData = async pricingData => {
  console.log("Formatting pricing data..");
  const placesMap = _.groupBy(pricingData.Places, x => x.Id);
  const legsMap = _.groupBy(pricingData.Legs, x => x.Id);

  return {
    itineraries: pricingData.Itineraries.map(i => {
      const outboundLeg = legsMap[i.OutboundLegId][0];
      const inboundLeg = legsMap[i.InboundLegId][0];
      return {
        id: uuidv1(),
        outboundLeg: {
          originStationCode: placesMap[outboundLeg.OriginStation][0].Code,
          destinationStationCode:
            placesMap[outboundLeg.DestinationStation][0].Code,
          departureDate: outboundLeg.Departure,
          arrivalDate: outboundLeg.Arrival,
          duration: outboundLeg.Duration,
          stopsCount: outboundLeg.Stops.lengths
        },
        inboundLeg: {
          originStationCode: placesMap[inboundLeg.OriginStation][0].Code,
          destinationStationCode:
            placesMap[inboundLeg.DestinationStation][0].Code,
          departureDate: inboundLeg.Departure,
          arrivalDate: inboundLeg.Arrival,
          duration: inboundLeg.Duration,
          stopsCount: inboundLeg.Stops.length
        },
        price: i.PricingOptions[0].Price,
        currencySymbol: pricingData.Currencies[0].Symbol
      };
    })
  };
};

module.exports = {
  formatPricingData
};
