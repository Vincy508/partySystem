$("#inputfile1").change(function () {
    var obj = document.getElementById("inputfile1").files[0];
    console.log(document.getElementById("inputfile1"));
    var path = window.URL.createObjectURL(obj);
    console.log(path);
    $("#img1").attr("src", path);
});

$("#inputfile2").change(function () {
    var obj = document.getElementById("inputfile2").files[0];
    var path = window.URL.createObjectURL(obj);
    //console.log(path);
    $("#img2").attr("src", path);
});

$("#inputfile3").change(function () {
    var obj = document.getElementById("inputfile3").files[0];
    var path = window.URL.createObjectURL(obj);
    //console.log(path);
    $("#img3").attr("src", path);
});

$("#inputfile4").change(function () {
    var obj = document.getElementById("inputfile4").files[0];
    var path = window.URL.createObjectURL(obj);
    //console.log(path);
    $("#img4").attr("src", path);
});

