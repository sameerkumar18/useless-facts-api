const express = require('express');
const facts = require('./facts');
const helpers = require('./helpers');

const app = express();
app.get('/', function(request, response) {
    response.send({
        'author' : 'Sameer Kumar',
        'author_url' : 'https://www.sameerkumar.website',
        'base_url' : 'https://useless-facts.sameerkumar.website',
        'project_name' : 'Useless Facts API',
        'project_url' : 'https://github.com/sameerkumar18/useless-facts-api'
    })
});
app.get('/api', function(request, response) {
    let count = parseInt(request.query.count) || 1;
    let useless_facts = facts.useless_facts;
    if(count > 1){
        var data = helpers.shuffle(useless_facts).slice(1, count);
    }
    else{
        var data = useless_facts[Math.floor(Math.random() * useless_facts.length)];
    }
    response.send({"data":data});
});
app.listen(process.env.PORT || 3000, () => console.log('Listening...'))
