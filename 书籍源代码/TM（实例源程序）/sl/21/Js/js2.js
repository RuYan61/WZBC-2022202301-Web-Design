// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
var objWorker = new Worker("../Js/js2_1.js");
//自定义页面加载时调用的函数
function jiazai() {
    objWorker.addEventListener('message',
    function(event) {
        $$("p").style.display = "block";
        $$("p").innerHTML += event.data;
    },
    false);
}
//自定义点击"请求"按钮时调用的函数
function click1() {
    //获取发送内容
    var strTxtValue = $$("tn").value;
    if (strTxtValue.length > 0) {
        objWorker.postMessage(strTxtValue);
        $$("tn").value = "";
    }
}