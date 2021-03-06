
//TODO create an actual API, make it so the URL that jQuery is using calls
//the REST endpoints created in your server api

$(document).ready(function(){
console.log('Loaded');

});

$('#topFive').click(function(e){
    e.preventDefault();

    console.log('clicked submit');

    $.ajax({
      type: 'GET',
      url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=5&api_key=41d6d1221c2d58f4e99059abab7a48db&format=json',
      dataType: 'json',
      success: topFiveSuccessCallback
    }).fail(function(){
      console.log('Top Five FAILED!');
    });
});

$('#albumButton').click(function(e){
  e.preventDefault();
  var album = $('form').serializeArray();
  var url = 'http://ws.audioscrobbler.com/2.0/?method=album.search&limit=15&album=' + (album[0].value) + '&api_key=41d6d1221c2d58f4e99059abab7a48db&format=json';

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: albumSearchSuccessCallback
  }).fail(function(){
    console.log('Album search FAILED!');
  });

});

var albumSearchSuccessCallback = function(data){
  $('#albumSearchDiv').empty();
  console.log(data)
  var $li = $('<ul>');
  var $div = $('<div id="albumSearchResultDiv">');
    $.each(data.results.albummatches.album, function(index, value){

      var $name = $('<li> '+ value.artist + ' <a href=" ' + value.url + '" target="_blank"> '  +
                    value.name + ' </a><img src="' + value.image[1]["#text"]+ '"> </li><br/>' );
      console.log(index + ' ' + $name.toString())
      $li.append($name);


    });
    $('body').append($div);

    var button = $('<button id="buttonClose">Close</button>');
    $('#albumSearchResultDiv').append(button);

    $('#albumSearchResultDiv').append($li);

    $('#buttonClose').click(closeDiv);
}

var topFiveSuccessCallback = function(data){
  $('#topFive').remove();
  console.log(data);
  var $table = $('<table>');
  var $th = $('<th>#</th><th>Name of the Song</th><th>Artist</th><th>All time count</th>')

  $table.append($th);
    $.each(data.tracks.track, function(index, value){


    var $number = $('<td>' + (index + 1) + '</td>');
    var $name = $('<td><a href=" ' + value.url + '" target="_blank">' + value.name+ '</a></td>');
    var $artist = $('<td><a href=" '+ value.artist.url + '" target="_blank"> ' + value.artist.name + '</a></td>')

    var $playCount = $('<td>' + value.playcount+ '</td>');

    $table.append('<tr>');
    $table.append($number);
    $table.append($name);
    $table.append($artist);
    $table.append($playCount);

    $table.append('</tr>');



    });
 var button = $('<button id="buttonClose">Close</button>');

 $('#topCharts').append(button);
 $('#topCharts').append($table);
 $('#buttonClose').click(closeDiv);
}

var closeDiv = function(){
  console.log('clicked the close button');
  $(this).parent().remove();
}
