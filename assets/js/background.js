var notificated = false;
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
                notificated = false;
            }
            else{
                chrome.browserAction.setIcon({path: "assets/images/logo_rec.png"});
                if(!notificated){
                    notification();
                    notificated = true;
                }
            }
            if(chrome.browserAction.getIcon() === "\"assets/images/logo.png\""){
                var title = "WebTv Hexa Gaming";
                var message = "La WebTv d'Hexa Gaming est en Live !";
                chrome.notifications.create('Notif', {type: "basic", title: title, message: message, iconUrl: "./assets/images/logo.png"}, function(id) {});
                chrome.notifications.onClicked.addListener(function(id) {
                    chrome.tabs.create({url: 'https://www.twitch.tv/hexagamingtv1%27%7D'});
                    });
            }
        }
    };
    xhr.send();
}

// Création de la notification
function notification(){
    var title = "WebTv Hexa Gaming";
    var message = "La WebTv d'Hexa Gaming est en Live !";
    chrome.notifications.create('Notif', {type: "basic", title: title, message: message, iconUrl: "./assets/images/logo.png"}, function(id) {});
    chrome.notifications.onClicked.addListener(function(id) {
        chrome.tabs.create({url: 'https://www.twitch.tv/hexagamingtv1'});
    });
    var soundnotif = new Audio('./assets/mp3/notification.mp3');
    soundnotif.play();
}
