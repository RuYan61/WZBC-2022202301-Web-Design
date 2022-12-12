// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//点击"发表"按钮时调用
function click1() {
    //获取文本框中的内容
    var strContent = $$("tc").value;
    //如果不为空，则保存
    if (strContent.length > 0) {
        var strKey = RetRndNum(4);
        var strVal = strContent;
        if (navigator.onLine) {
			//如果在线向服务器端增加数据
            AddServerData(strKey, strVal);
        }
        localStorage.setItem(strKey, strVal);
    }
    //重新加载
    SynclocalData();
    //清空原先内容
    $$("tc").value = "";
}

//获取保存数据并显示在页面中
function localdata() {
    //标题部分
    var strHTML = "<li class='li_h'>";
    strHTML += "<span class='spn_a'>ID</span>";
    strHTML += "<span class='spn_b'>内容</span>";
    strHTML += "</li>";
    //内容部分
    for (var intI = 0; intI < localStorage.length; intI++) {
        //获取Key值
        var strKey = localStorage.key(intI);
        //过滤键名内容
        var strVal = localStorage.getItem(strKey);
        strHTML += "<li class='li_c'>";
        strHTML += "<span class='spn_a'>" + strKey + "</span>";
        strHTML += "<span class='spn_b'>" + strVal + "</span>";
        strHTML += "</li>";
        if (navigator.onLine) {
			//如果在线向服务端增加数据
            AddServerData(strKey, strVal);
        }
    }
    $$("mm").innerHTML = strHTML;
}
//生成指定长度的随机数
function RetRndNum(n) {
    var strRnd = "";
    for (var intI = 0; intI < n; intI++) {
        strRnd += Math.floor(Math.random() * 10);
    }
    return strRnd;
}
//向服务器同步点评数据
function AddServerData(id, val) {
    //根据ID号与内容,向服务器端数据库增加记录
    //例如"/Cache/Data/?id="+id+"&val="+val;
}