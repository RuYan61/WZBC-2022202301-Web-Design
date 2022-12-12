onmessage = function(event){
    var num = event.data;
	var intarray=num.split('@'); //返回字符串中数字分隔符为@
	var result = 0;
   for (var i = parseInt(intarray[0]); i <= intarray[1]; i++) {	//执行求和运算
   result += i;
   }
	postMessage( result); //返回运算结果拼接成的字符串
}
