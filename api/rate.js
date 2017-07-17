var unirest = require('unirest');
var queryString = require('query-string');
var moment = require('moment');

class RateApi {
    constructor() {
        var URL = 'https://iapi.bot.or.th/Stat/Stat-ReferenceRate/DAILY_REF_RATE_V1/';
        var key = { 'api-key': 'U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm' };
        this.getURL = function getURL() {
            return URL;
        };
        this.getKey = function getKey() {
            return key;
        };
    }
    dateToQueryString(date1, date2) {
        var inputObject = {
            start_period: date1,
            end_period: date2
        };
        return queryString.stringify(inputObject);
    }
    getRateDaily(startDate, endDate, callback) {
        var self = this;
        var url = self.getURL() + '?' + self.dateToQueryString(startDate, endDate);
        console.log(url);
        unirest.get(url)
            .headers(self.getKey())
            .end(function(response) {
                console.log(response.body);
                callback(null, null);
            });
    }
    getToDay(callback) {
      var today = moment().format('YYYY-MM-DD');
      this.getRateDaily(today, today, callback);
    }
}

module.exports = RateApi;
