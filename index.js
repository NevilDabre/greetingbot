
function getGreeting(name){
    let currentDate = new Date();
    let hours = currentDate.getHours();
    var guestName = name ? name.replace(/\s/g, ''): ' good looking!'
    let greet;

    if(hours<12){
        greet = `Good Morning ${guestName}!`;
    }else if(hours>=12 && hours <=17){
        greet = `Good Afternoon ${guestName}!`;
    }else if(hours>17 && hours <=24){
        greet = `Good Night ${guestName}!`;
    }else{
        greet = `Good Day ${guestName}!`;
    }

    return greet;
}


module.exports = function greetingbot(name){
    return getGreeting(name);
}