// get albums from api
$.getJSON('https://lit-fortress-6467.herokuapp.com/object', function(data){
  var albumArr = []
  var randomThreeAlbums = []
  data['results'].forEach(function(value, key){
    var container = document.getElementById('albumList')
    var albumDiv = document.createElement('div')
    var img = document.createElement('img')
    img.id = "albumOnTracks"
    img.src = 'images/'+value.cover_art
    albumDiv.id = "album"+value.id
    albumDiv.appendChild(img)
    albumArr.push(albumDiv)
  })
  var num = 0
  var alreadyUsed = []
  while(num < 3) {
    rand = ((Math.random() * 10) % 4).toFixed(0)
    if (alreadyUsed.indexOf(rand) === -1) {
      alreadyUsed.push(rand)
      document.getElementById('albumList').appendChild(albumArr[rand])
      num += 1
    }
  }
});
