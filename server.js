var express = require('express');
var app = express();
var $;
var list = [];

var search;
var key = "&key=AIzaSyDm-zMdGCMdJ-SlpQDQx9WY5_2cK0SWG4g";
var cx = "&cx=015858406854284967730:snxgeqfadv8";
var searchType = "&searchType=image";
var fields = "&fields=items(title,image/thumbnailLink,link)";

require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
 
	$ = require("jquery")(window);
});

console.log("");

app.use(express.static('client'));

var updateList = function(searchInput) {
    if(list.length >= 10) {
        list.shift();
        list.push(searchInput);
    }
    else {
        list.push(searchInput);
    }
}

//example run: https://wanjongkim-image-search.herokuapp.com/api/imagesearch?searchInput=cats&offset=1 
app.get('/api/imagesearch', function(req, res) {
	if(req.query.searchInput != null) {
		var search = "https://www.googleapis.com/customsearch/v1?q=" + req.query.searchInput + key + cx + searchType + fields;
	
    	console.log("Got a GET request for image search");
    	var response = [];
    	var offset = req.query.offset;
    	
        $.getJSON(search, function(data) {
            $.each(data.items, function(index, value) {
                if(isNaN(offset)) {
                    var obj = {};
                    obj.title = value.title;
                    obj.link = value.link;
                    obj.image = value.image.thumbnailLink;
                    response.push(obj);
                }
                else if(index < offset) {
                    var obj = {};
                    obj.title = value.title;
                    obj.link = value.link;
                    obj.image = value.image.thumbnailLink;
                    response.push(obj);
                }
            });
            
            updateList(req.query.searchInput);
            res.setHeader('Content-Type', 'application/json');
        	res.send(JSON.stringify(response));
    	});
    }
});

app.get('/api/most-recent-search', function(req, res) {
    var listOfSearches = [];
    for(var i=0; i<list.length; i++) {
       var obj = {"title" : list[i]};
       listOfSearches.push(obj);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(listOfSearches));
}); 

app.listen(process.env.PORT, process.env.IP);

