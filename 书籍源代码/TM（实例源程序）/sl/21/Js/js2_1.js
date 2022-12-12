// JavaScript Document
self.onmessage = function(event) {
    var intLen = event.data;
    var LngRndNum = RetRndNum(intLen);
    var objWorker = new Worker("js2_1_1.js");
    objWorker.postMessage(LngRndNum);
    objWorker.onmessage = function(event) {
        var strRetHTML = "<span><b> ";
        strRetHTML += intLen + " </b>位随机数为：<b> ";
        strRetHTML += LngRndNum;
        strRetHTML += " </b> " + event.data + " </span><br>";
        self.postMessage(strRetHTML);
    }
}
//生成指定长度的随机数
function RetRndNum(n) {
    var strRnd = "";
    for (var intI = 0; intI < n; intI++) {
        strRnd += Math.floor(Math.random() * 10);
    }
    return strRnd;
}