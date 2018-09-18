const AD = require('ad');
const express = require('express');

const ad = new AD({
    "url": "ldap://127.0.0.1:3389",
    "user": "Administrator@acme.local",
    "pass": "FLINCpass123$"
});

const app = express();
const port = process.env.PORT || 3333;

app.use(express.static(__dirname + '/client/build'));
// app.use(require('./server/middleware.js'));
app.use(require('./server/routes.js'));

app.listen(port, () => console.log(`Listening on port ${port}`));