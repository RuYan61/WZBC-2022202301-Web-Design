// JavaScript Document
function $$(id){
	return document.getElementById(id);
}   
//定义变量
var intR,intG,intB,strColor;
//根据获取变化的值，设置预览方块的背景色函数
function setSpnColor(){
	intR=$$("txtR").value;
	intG=$$("txtG").value;
	intB=$$("txtB").value;
	strColor="rgb("+intR+","+intG+","+intB+")";
	$$("pColor").innerHTML=strColor;
	$$("spnPrev").style.backgroundColor=strColor;
}
//初始化预览方块的背景色
setSpnColor();