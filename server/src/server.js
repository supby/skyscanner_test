/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const express = require('express');

const app = express();
const livePricing = require('./live-pricing');
const dataFormatter = require('./dataFormatter');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.
  API params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search/:originplace/:destinationplace/:outbounddate/:inbounddate/:adults/:children/:infants', async (req, res) => {
  try {
    const results = await livePricing.search({
      originplace: req.params.originplace,
      destinationplace: req.params.destinationplace,
      outbounddate: req.params.outbounddate,
      inbounddate: req.params.inbounddate,
      adults: req.params.adults,
      children: req.params.children,
      infants: req.params.infants,
    });
    res.json(await dataFormatter.formatPricingData(results));
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
