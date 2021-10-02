alert("Welcome to this page");
function displayTime(){time=new Date();
 //console.log(time);
 document.getElementById('time').innerHTML=time;}
 setInterval(displayTime,1000);
 function greet(){alert("Note the date \n dont forget to give\n your gracious presence")}
 setTimeout(greet,10000);
