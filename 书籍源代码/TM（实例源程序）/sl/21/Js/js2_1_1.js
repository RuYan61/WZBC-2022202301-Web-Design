// JavaScript Document   
self.onmessage = function(event) {
    if (event.data % 2 == 0) {
        self.postMessage("偶数");
    } else {
        self.postMessage("奇数");
    }
    self.close();
}