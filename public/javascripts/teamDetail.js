function getTeamDetail(){
    var title = document.getElementById('name');
    var description = document.getElementById('description');
    var leaderName = document.getElementById('captainName');
    var leaderQQ = document.getElementById('qqNumber');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);

            title.value = data.title;
            description.value = data.description;
            leaderName.value = data.leaderName;
            leaderQQ.value = data.leaderQQ;
            console.log(data);
        }
    }

    xhttp.open('GET','/teamDetail/getTeamDetail',true);
    xhttp.send();
}

getTeamDetail();
