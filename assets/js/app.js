var xhr = new XMLHttpRequest();
xhr.open("GET","https://api.twitch.tv/kraken/streams/hexagamingtv1?client_id=n1b4fudsbjw9agtxufc8k6bfcgv875", true);
xhr.onreadystatechange = function(){
    if(xhr.readyState === xhr.DONE){
        var data = JSON.parse(xhr.responseText);
        if(data["stream"] === null){
            $("#toUpdate").html("La WebTv n'est pas en Live ! <i class=\"fas fa-poo\"></i>");
        }
        else{
            $("#toUpdate").html("La WebTv est actuellement en Live ! <i class=\"far fa-smile\"></i>");
        }
    }
};
xhr.send();

