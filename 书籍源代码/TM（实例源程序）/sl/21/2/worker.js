function addNumbers(x,y) {   
   return x + y;   
function mulNumbers(x,y) {   
   return x*y;   
   this.onmessage = function (event) {   
   var msg = event.data;  
       arr = msg.split("_");  
       op = arr[0];  
       x = (arr[1] || "")|0;  
       y = (arr[2] || "")|0;   
   switch(op) {   
       case 'mult':   
           postMessage( x + "*" + y + "=" + mulNumbers(x, y));   
           break;   
       case 'add':   
           postMessage( x + "+" + y + "=" + addNumbers(x, y));   
           break;   
       default:   
           postMessage("Wrong operation specified");   
   }   
   var i = 1;   
   while (i < 1000*1000*1000) {   
       if (i % 500000 === 0) {   
           postMessage(i);   
       }   
       i++;   
   	}
   }
}
};