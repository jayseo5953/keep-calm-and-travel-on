var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://dxqyeagi:0Ed5llEPVGWq1dn58q8R15JHtpIiIeYQ@rajje.db.elephantsql.com:5432/dxqyeagi" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * from activities AS "activity"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
}); 