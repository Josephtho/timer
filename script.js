
// By Joseph Thoré - josephthore.me - jothore@gmail.com
    
/* Copy that in your DOM.ready function :
    //  Instancie la classe
    var timer = new Timer();
    // Display time remaining on loading
    timer.displayDate(timer.formatDate(new Date));
    // Set la boucle
    setInterval(function(){
        timer.displayDate(timer.formatDate(new Date));
    }, 1000) */
     
var Timer = function(){
    this.endDate = new Date(2017, 08, 01, 10,30);

};

Timer.prototype.formatDate = function (today){
    var timeRemaining = this.endDate - today;

    var days = Math.floor(timeRemaining/(1000*3600*24));
    timeRemaining%=(1000*3600*24);

    var hours = Math.floor((timeRemaining)/(1000*3600));
    timeRemaining%=(1000*3600);

    var min = Math.floor((timeRemaining)/(1000*60));
    timeRemaining%=(1000*60);

    var sec = Math.floor((timeRemaining)/1000);

    return { 'days' 	: days,
        'hours' 	: hours,
        'min' 	: min,
        'sec' 		: sec};
}

Timer.prototype.displayDate = function (date){
    $('.days').html(date.days+' <span>j</span>');
    $('.hours').html(date.hours+' <span>h</span>');
    $('.min').html(date.min+' <span>min</span>');
    $('.sec').html(date.sec+' <span>sec</span>');
}



