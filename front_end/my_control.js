<script type="text/javascript">
$(function(){

//全选/全不选
$("#all").click(function(){
$("[name=items]:checkbox").prop("checked",this.checked);
});
$("[name=items]:checkbox").click(function(){
var flag=true;
$("[name=items]:checkbox").each(function(){
if(!this.checked){
flag=false;
}
});
$("#all").prop("checked",flag);
})



//全选
$("#selectAll").click(function(){
$("[name=items]:checkbox").each(function(){
$(this).prop("checked",true);
});
});



//全不选
$("#unSelect").click(function(){
$("[name=items]:checkbox").each(function(){
$(this).prop("checked",false);
});
});



//反选
$("#reverse").click(function(){
$("[name=items]:checkbox").each(function(){ //遍历每一个复选框
//$(this).prop("checked",!$(this).prop("checked")); //jQuery方法取复选框的反向值
this.checked=!this.checked; //js方法
});
});



//输出选中的值
$("#btn").click(function(){
var str="你选中的是：\r\n";
$("[name=items]:checkbox:checked").each(function(){
str+=$(this).val()+"\r\n";
});
alert(str);
});
})
</script>
