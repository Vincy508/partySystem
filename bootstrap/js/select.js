

$("#mainPhoto").change(function(){
    var a=$(this).val();
    $("#mainValue").val(a);
    console.log($("#mainValue").val());
});

$("#xuanChuanPhoto").change(function(){
    var b=$(this).val();
    $("#xuanChuanValue").val(b);
    console.log($("#xuanChuanValue").val());
});
