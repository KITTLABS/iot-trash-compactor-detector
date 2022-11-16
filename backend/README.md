# How to run backend node API server

1. Install dependencies: `npm install`
2. start server inside backend/ `npm start`
3. Test with postman to below endpoints

hostname = localhost

GET {hostname}/mqtt/pub - //TODO: add feature to send webhook via mqtt change to POST
GET {hostname}/mqtt/sub - //TODO: update subscription via webhook change to POST
GET {honstname}/device/:deviceId (ie: 1, 2, 3) - //TODO: get device twin information by id
