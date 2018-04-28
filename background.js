checkStream();

set Interval(function()){
	checkStream();
},5000);

function checkStream(){
var xhr = new XMLHttpRequest();
xhr.open("GET","https://api.twitch.tv/kraken/streams/hexagamingtv1?client_id=n1b4fudsbjw9agtxufc8k6bfcgv875", true);
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		var data = JSON.parse(xhr.responseText);
		if(data["stream"] == null){
			$("#info").html("La WebTv n'est pas en Live ! :(");
			chrome.browserAction.setIcon({path: "icon3.png"})
		}else{
			$("#info").html("La WebTv est actuellement en Live ! :)");
			chrome.browserAction.setIcon({path: "icon2.png"})
		}
	}
}
xhr.send();
}