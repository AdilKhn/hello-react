const Client  = require('node-rest-client').Client;
export default class Utils {

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static getUrlData(callback) {
    let client = new Client();
    client.get('http://127.0.0.1:3001/api/names', 
      function(data) {
        callback(data);
      })
  }

}
