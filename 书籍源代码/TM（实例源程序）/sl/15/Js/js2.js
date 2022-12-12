// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}   
//自定义页面加载时调用的函数
function pageload() {
    var Drag = $$("divDrag");
    var Area = $$("divArea");
	//添加被拖放元素的dragstart事件
    Drag.addEventListener("dragstart",
    function(e) {
        Status_Handle("元素正在开始拖动...")
    });
	//添加目标元素的drop事件
    Area.addEventListener("drop",
    function(e) {
        Status_Handle("元素拖入成功!")
    });
	//添加目标元素的dragleave事件
    Area.addEventListener("dragleave",
    function(e) {
        Status_Handle("拖动元素正在离开...")
    });
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("divTips").innerHTML += message + "<br>";
}
//添加页面的dragover事件
document.ondragover = function(e) {
	//阻止默认方法,取消拒绝被拖放
    e.preventDefault();
}
//添加页面drop事件
document.ondrop = function(e) {
	//阻止默认方法,取消拒绝被拖放
    e.preventDefault();
}