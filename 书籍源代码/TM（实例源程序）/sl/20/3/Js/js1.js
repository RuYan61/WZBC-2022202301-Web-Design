// JavaScript Document
function $$(id) {   
    return document.getElementById(id);
}
//获取当前格式化后的时间并显示在页面上
function getCurTime(){
   var dt=new Date();
   var strHTML="当前时间是 ";
   strHTML+=RuleTime(dt.getHours(),2)+":"+
            RuleTime(dt.getMinutes(),2)+":"+
		    RuleTime(dt.getSeconds(),2);
   $$("time").value=strHTML;
}
//转换时间显示格式
function RuleTime(num, n) {
    var len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}
//定时执行
setInterval(getCurTime,1000);