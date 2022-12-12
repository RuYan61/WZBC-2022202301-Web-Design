// JavaScript Document
var json = {
	姓名: "龙五",
    性别: "男",
    邮箱: "longwu@163.com"
};
self.onmessage = function(event) {
    self.postMessage(json);
    close();
}