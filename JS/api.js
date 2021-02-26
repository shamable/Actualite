const  API_URL  =  'http://ws.audioscrobbler.com/2.0/' ;
const  API_KEY  =  '#' ;
const  API_USER_NAME  =  '#' ;




var url = 'https://newsapi.org/v2/everything'? +
        'q=Apple&' +
    'from=2021-02-23&' +
    'sortBy=popularity&' +
    'apiKey=API_KEY';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })