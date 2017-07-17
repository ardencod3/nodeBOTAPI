var RateApi = require('./api/rate');

class BOT {
    constructor() {
        this.rate = new RateApi();
    }
}
;

module.export = BOT;

// var test = new BOT;
// test.rate.getToDay(function (err, result) {
//   console.log(err, result);
// });
