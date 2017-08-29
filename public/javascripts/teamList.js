function addItemToTeamList(){
    let teamList;
    let teamTable = document.getElementById('teamTable');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            questionList = JSON.parse(this.responseText);

            for(let i=0;i < teamList.length;i++){
                teamTable.innerHTML += '<tr><td><a href=" ID=' + teamList[i].ID + '">' + teamList[i].title + '</a></td></tr>';
            }
        }
    }

    xhttp.open('GET','',true);
    xhttp.send();

}

addItemToTeamList();
