$(document).ready(function(){
  // get albums from api
  $.getJSON('https://lit-fortress-6467.herokuapp.com/object', function(data){
    var albumArr = []
    var randomThreeAlbums = []
    data['results'].forEach(function(value, key){
      var container = document.getElementById('albumList')
      var img = document.createElement('img')
      img.id = "albumHorizontal"
      img.name = value.title
      img.onclick = function(click){
        document.getElementById('albumBin').innerHTML += (click.path[0].name+"<br>")
      }
      img.src = 'images/'+value.cover_art
      document.getElementById('albumHorizScroll').appendChild(img)
    })
  });

document.getElementById('clearTracks').onclick = function(){
  document.getElementById('albumBin').innerHTML = ""
}
document.getElementById('submitBin').onclick = function(){
  var bin = $('#albumBin').html()
  $.ajax({
    method: 'POST',
    url: 'http://www.httpbin.org/post',
    data: {selectedAlbums : bin},
    success: function(data){
      console.log(data.form)
    }
  })
}
})
