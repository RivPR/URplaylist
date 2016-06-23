$(document).ready(function(){
console.log('Loaded');

});

$('#albumButton').click(function(e){
    e.preventDefault();

    console.log('clicked submit');

    $.ajax({
      type: 'GET',
      url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=5&api_key=41d6d1221c2d58f4e99059abab7a48db&format=json',
      dataType: 'json',
      success: successCallback
    }).fail(function(){
      console.log('FAILED!');
    });
});

var successCallback = function(data){
  $('#ajaxContent').remove();
  console.log(data);
  var $table = $('<table>');
  var $th = $('<th>Name of the Song</th><th>Artist</th><th>All time count</th><th>URL</th>')

  $table.append($th);
    $.each(data.tracks.track, function(index, value){



    var $name = $('<td>' + value.name+ '</td>');
    var $artist = $('<td>' + value.artist.name + '</td>')
    var $playCount = $('<td>' + value.playcount+ '</td>');
    var $url = $('<td><a href="' + value.url + '" target="_blank"> '+ value.name + '</td>');
    $table.append('<tr>');
    $table.append($name);
    $table.append($artist);
    $table.append($playCount);
    $table.append($url);
    $table.append('</tr>');
    });
  console.log('before appending');
 $('#topCharts').append($table);
}
