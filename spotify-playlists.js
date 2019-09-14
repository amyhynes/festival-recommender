var request = require("request");
var user_id = "amyh33";
var token = "Bearer BQDuoPubojKH1deW2EjJZ2ic8t-KbqOCRHFjwtRAl4YYq8pBWO5viuRFPRYvrNGhenAKvNgTQm3zUIM1zekh3MKuti_9aAgrDRXsiC_W77nOw7UOoP-A01OAIsqoaTMIt4vuyK457ECg-Cs"
var playlists_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists";
var playlistList = [];

request({url:playlists_url, headers:{"Authorization":token}}, function(err, res){
	if (res){
		var playlists = JSON.parse(res.body);
		playlists.items.forEach(function(playlist){
			playlistList.push(playlist.name);
			//console.log(playlist.name);
		})
		var playlist_url = playlists.items[0].href;
		request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
			if (res) {
				var playlist = JSON.parse(res.body);
				console.log("playlist: " + playlist.name);
				playlist.tracks.items.forEach(function(track){
					//console.log(track.track.name);
				});
			}
		})
		console.log(displayPlaylists());
	}
})

function displayPlaylists(){
	return playlistList;
}