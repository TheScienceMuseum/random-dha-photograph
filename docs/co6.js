var request = new XMLHttpRequest();
var imghost = 'https://coimages.sciencemuseumgroup.org.uk/';

request.addEventListener('load', function (e) {
  // response comes back as "{data: [{attributes: {locations: [{...}], summary_title: '...'} ...}, {} ...]}"
  JSON.parse(this.responseText).data.forEach(function (el) {
 
     document.getElementById('pix').innerHTML = '<a href="' + el.links.self + '"><img alt="" src="' + imghost + el.attributes.multimedia[0]['@processed'].medium.location + '"></a> ';
     document.getElementById('pix1').innerHTML = '<a href="' + el.links.self + '"><img alt="" src="' + imghost + el.attributes.multimedia[1]['@processed'].medium.location + '"></a> ';
 
  });
});

// Get a random object (cache-buster stops CloudFront serving the same "random" object for 60s)
request.open('GET', 'https://collection.sciencemuseumgroup.org.uk/search/images/collection/daily-herald-archive?random=1&_=' + Date.now());
request.setRequestHeader('accept', 'application/json');
request.send();
