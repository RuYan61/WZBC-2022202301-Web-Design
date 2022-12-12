// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}   
//自定义页面加载时调用的函数
function pageload() {
	//获取全部的图书商品
    var Drag = document.getElementsByTagName("img");
	//遍历每一个图书商品
    for (var intI = 0; intI < Drag.length; intI++) {
		//为每一个商品添加被拖放元素的dragstart事件
        Drag[intI].addEventListener("dragstart",
        function(e) {
            var objDtf = e.dataTransfer;
            objDtf.setData("text/html", addCart(this.title, this.alt, 1));
        },
        false);
    }
    var Cart = $$("ulCart");
	//添加目标元素的drop事件
    Cart.addEventListener("drop",
    function(e) {
        var objDtf = e.dataTransfer;
        var strHTML = objDtf.getData("text/html");
        Cart.innerHTML += strHTML;
        e.preventDefault();
        e.stopPropagation();
    },
    false);
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
//自定义向购物车中添加记录的函数
function addCart(a, b, c) {
    var strHTML = "<li class='liC'>";
    strHTML += "<span>" + a + "</span>";
    strHTML += "<span>" + b + "</span>";
    strHTML += "<span>" + c + "</span>";
    strHTML += "<span>" + b * c + "</span>";
    strHTML += "</li>";
    return strHTML;
}