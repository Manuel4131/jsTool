/* Create the relative code about maniputlation of date obj */

var timer = function (){
	var curTime =new Date();
	this.year = curTime.getFullYear();
	this.month = curTime.getMonth();
	this.date = curTime.getDate();
	this.day = curTime.getDay();
	this.hour= curTime.getHours();
	this.minutes=curTime.getMinutes();
	this.seconds= curTime.getSeconds();
	var token1= "/";
	var token2=":"
	this.DAY= this.year + token1 + this.month + token1 + this.date;
	this.TIME= this.hour+ token2  + this.minutes + token2 + this.seconds;
}

function startTimer(){
	var pollInterval= 1000;
	setTimeout(startTimer,pollInterval);
	// call timer 
    var t = new timer();
    var day = t.DAY;
    var time = t.TIME;
	//update the UI via the return string
}

startTimer();
