setInterval(function(){
    checkStream();
}, 1000);

function checkStream(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.twitch.tv/kraken/streams/hexagamingtv1?client_id=n1b4fudsbjw9agtxufc8k6bfcgv875", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === xhr.DONE){
            var data = JSON.parse(xhr.responseText);
            if(data["stream"] === null){
                chrome.browserAction.setIcon({path: "assets/images/logo.png"});
            }
            else{
                chrome.browserAction.setIcon({path: "assets/images/logo_rec.png"});
            }
        }
    };
    xhr.send();
}
