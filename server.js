//
// server.js
//

const app = require('./app');
const port = 1337;

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
