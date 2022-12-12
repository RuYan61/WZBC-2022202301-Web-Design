// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var objWorker = new Worker("../Js/js1_1.js");
//自定义页面加载时调用的函数
function jiazai() {
    objWorker.addEventListener('message',
    function(event) {
        var strHTML = "";
        var ev = event.data;
        for (var i in ev) {
            strHTML +="<span>"+ i + " :";
			strHTML +="<b> " + ev[i] + " </b></span><br>";
        }
        $$("p").style.display = "block";
        $$("p").innerHTML = strHTML;
    },   
    false);
    objWorker.postMessage("");
}