var expect = require('chai').expect;
var Scrapers = require('../index');
var Citilink = Scrapers.citilink;
describe('Citilink', function () {
	this.timeout(30000);
	describe('run', function () {
		it('should check db and then scrape and then save ', function (next) {
			var dt = {
				rute       : 'OW',
				ori        : 'SUB',
				dst        : 'CGK',
				adult      : '1',
				child      : '0',
				infant     : '0',
				dep_date   : '27+11+2014',
				id_maskapai: '9',
				user       : 'mitrabook',
				rute       : 'OW',
				dep_radio  : '1Fare6',
				_          : '1416361230832',
				priceScraper: false,
				airline       : 'citilink',
				flightCode    : 'QG',
				classCode     : 'M510',
				cek_instant   : 1,
				cek_instant_id: 'QG_M510',
				dep_date      : '27+12+2014',
			}
			var urlAirbinder = 'http://128.199.251.75:4/price';
			var urlPluto = 'http://pluto.dev/0/price/citilink';
			var options = {
				scrape: urlAirbinder,
				dt: dt,
				airline: 'citilink'
			};
			var citilink = new Citilink(options);
			citilink.run()
				.then(function (prices) {
					// console.log(prices);
					expect(prices.adult).to.exist;
					expect(prices.child).to.exist;
					expect(prices.infant).to.exist;
					expect(prices.basic).to.exist;
					next();
				})
				.catch(function (err) {
					return next(err);
				});
 		});
 	});
});