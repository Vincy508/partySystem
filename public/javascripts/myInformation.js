function getInformation(){
    var name = document.getElementById('name');
    var qqNumber = document.getElementById('qqNumber');
    var xhttp = new XMLHttpRequest();
    var data;

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            data = JSON.parse(this.responseText);

            name.value = data.RealName;
            qqNumber.value = data.QQ;
        }
    }

    xhttp.open('GET','/myInformation/getMyInformation',true);
    xhttp.send();
}

getInformation();
