const _ = require("lodash");
const uuidv1 = require("uuid/v1");

const formatLeg = (leg, placesMap) => ({
  originStationCode: placesMap[leg.OriginStation][0].Code,
  destinationStationCode: placesMap[leg.DestinationStation][0].Code,
  departureDate: leg.Departure,
  arrivalDate: leg.Arrival,
  duration: leg.Duration,
  stopsCount: leg.Stops.length,
});

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
        outboundLeg: formatLeg(outboundLeg, placesMap),
        inboundLeg: formatLeg(inboundLeg, placesMap),
        price: i.PricingOptions[0].Price,
        currencySymbol: pricingData.Currencies[0].Symbol
      };
    })
  };
};

module.exports = {
  formatPricingData
};
