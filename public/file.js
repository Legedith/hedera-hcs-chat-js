var fr = require('fs');            
fr.readFile("tweets.txt", 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});