function getTeamDetail(){
    var title = document.getElementById('title');
    var description = document.getElementById('description');
    var leaderName = document.getElementById('leaderName');
    var leaderQQ = document.getElementById('leaderQQ');

    var teamTable = document.getElementById('teamTable');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);

            title.innerHTML = data.title;
            description.innerHTML = data.description;
            leaderName.innerHTML = data.leaderName;
            leaderQQ.innerHTML = data.leaderQQ;

            for(let i=0;i<data.member.length;i++){
                teamTable.innerHTML = teamTable.innerHTML + '<tr><td>队员 '+ (i+1) +'</td><td>' + data.member[i].RealName + '</td></tr>';
            }
        }
    }

    xhttp.open('GET','/myTeam/getTeamInformation',true);
    xhttp.send();
}

getTeamDetail();

function getApplication(){
    var application = document.getElementById('application');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);

            for(let i=0;i<data.application.length;i++){
                application.innerHTML = application.innerHTML + '<tr><td>'+ data.application[i].Name +'</td>' +
                    '<td>'+ data.application[i].QQ +'</td>\
                    <td>\
                    <a class="click href="">\
                      <img src="picture/agree.png">\
                    </a>\
                    <a class="click href="">\
                    <img src="picture/refuse.png">\
                    </a>\
                    </td>\
                    </tr>';
            }
        }
    }

    xhttp.open('GET','/myTeam/getApplication',true);
    xhttp.send();
}

getApplication();
