// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}   
function v_move(v){
	$$("pTip").style.display=(v)?"block":"none";
}
function v_loadstart() {
	$$("spnPlayTip").innerHTML="开始加载";
}
function v_palying(){
	$$("spnPlayTip").innerHTML="正在播放";
}
function v_pause(){
	$$("spnPlayTip").innerHTML="已经暂停";
}
function v_ended(){
	$$("spnPlayTip").innerHTML="播放完成";
}
function v_timeupdate(e){
	var strCurTime=RuleTime(Math.floor(e.currentTime/60),2)+":"+
	               RuleTime(Math.floor(e.currentTime%60),2);
    var strEndTime=RuleTime(Math.floor(e.duration/60),2)+":"+
	               RuleTime(Math.floor(e.duration%60),2);
	$$("spnTimeTip").innerHTML=strCurTime+" / "+strEndTime;
}
//转换时间显示格式
function RuleTime(num, n) {
    var len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}
function $$(id) {
    return document.getElementById(id);
}   
var i=0,j=0,k=0;
function v_chkType(){   
	var strHTML="";   
	var arrType=new Array('audio/mpeg','audio/mov','audio/mp4;codecs="mp4a.40.2"','audio/ogg;codecs="vorbis"','video/webm;codecs="nvp8,vorbis"','audio/wav;codecs="f1"');   
	for(inti=0;inti<arrType.length;inti++){      
		switch($$("vdoMain").canPlayType(arrType[inti])){ 
		case "":           
			i=i+1;          
			break;      
		case "maybe":         
			j=j+1;          
			break;      
		case "probably":        
			k=k+1;          
			break;     
		}   
	}  
	strHTML+="空字符："+i+"<br>";   
	strHTML+="maybe："+j+"<br>";   
	strHTML+="probably："+k;   
	$$("spnResult").style.display="block";   
	$$("spnResult").innerHTML=strHTML;
}