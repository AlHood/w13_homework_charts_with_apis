var app = function(){

  new ColumnChart();

  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
    makeRequest(url, requestSpotify);


}

var makeRequest = function(url, callback) {
// create a new xml http request object
  var request = new XMLHttpRequest();

// set the type of request and the url
  request.open("GET", url);

// set the callback we want it to use when the request is complete
  request.onload = callback;

  // send the request
  request.send();
};

var requestSpotify = function() {
  if(this.status !== 200) {
    return;
  }
  // grab the response text
  var jsonString = this.responseText;
  var data = JSON.parse(jsonString);
  
  console.log(data);
  console.log(data.albums.items)

  populateSpotifyResult(data.albums.items);
};

var populateSpotifyResult = function(data) {
      var pTag = document.querySelector("#spotify-result");

      for(album of data) {
        pTag.innerText += ("\n " + album.name)


      }

};





window.onload = app;




















// window.onload = function() {
//   new ColumnChart();
// }