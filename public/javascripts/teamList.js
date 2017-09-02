function addItemToTeamList(){
    let teamList;
    let teamTable = document.getElementById('teamTable');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            teamList = JSON.parse(this.responseText);

            for(let i=0;i < teamList.length;i++){
                teamTable.innerHTML += '<tr><td><a href="/teamDetail?ID=' + teamList[i].ID + '">' + teamList[i].title + '</a></td></tr>';
            }
        }
    }

    xhttp.open('GET','/teamList/getTeamList',true);
    xhttp.send();

}

addItemToTeamList();
