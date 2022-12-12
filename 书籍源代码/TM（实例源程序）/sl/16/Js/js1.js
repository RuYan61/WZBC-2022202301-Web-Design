// JavaScript Document
function $$(id) {   
    return document.getElementById(id);
}
function Video_Error(e) {
    var intState = e.error.code;
    $$("spnStatus").style.display = "block";
    $$("spnStatus").innerHTML = ErrorByNum(intState);
}
function ErrorByNum(n) {
    switch (n) {
    case 1:
        return "加载异常，用户请求中止!";
    case 2:
        return "加载中止，网络错误！";
    case 3:
        return "加载完成，解码出错";
	case 4:
        return "不支持的播放格式!";
    }
}
