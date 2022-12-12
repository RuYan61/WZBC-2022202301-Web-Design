function $$(id) {
    return document.getElementById(id);
}    
//页面加载时调用的函数
function pageload(){    
	var strName=localStorage.getItem("keyName");    
	var strPass=localStorage.getItem("keyPass");    
	if(strName){        
		$$("txtName").value=strName;    
	}    
	if(strPass){        
		$$("txtPass").value=strPass;    
	}
}
//单击“登录”按钮后调用的函数
function btn_click(){    
	var strName=$$("txtName").value;    
	var strPass=$$("txtPass").value;    
	localStorage.setItem("keyName",strName);    
	if($$("chkSave").checked){       
		localStorage.setItem("keyPass",strPass);    
	}else{       
		localStorage.removeItem("keyPass");    
	}    
	$$("spnStatus").className="status";    
	$$("spnStatus").innerHTML="登录成功!";
}
