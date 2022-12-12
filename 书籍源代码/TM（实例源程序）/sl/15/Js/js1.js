// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}    
var started;
var initX,initY,offsetX,offsetY;
//自定义页面加载时调用的函数
function pageload() {
    var divTitle = $$("divTitle");
    var divFrame = $$("divFrame");
    divFrame.style.left = 30 + "px";
    divFrame.style.top = 20 + "px";
	//鼠标按下时触发的事件
    divTitle.onmousedown = function(e) {
        started = true;
        initX = parseInt(divFrame.style.left);
        initY = parseInt(divFrame.style.top);
        offsetX = e.clientX;
        offsetY = e.clientY;
    };
	//鼠标移动时触发的事件
    divFrame.onmousemove = function(e) {
        if (started) {
            var x = e.clientX - offsetX + initX;
            var y = e.clientY - offsetY + initY;
            divFrame.style.left = x + "px";
            divFrame.style.top = y + "px";
			divTitle.innerHTML="已拖动";
        }
    };
	//鼠标弹起时触发的事件
    divFrame.onmouseup = function() {
        started = false;
        document.onmousemove = null;
    }
}