var hour = 8;
var minutes = 50;
var period = "AM";

var approx = "no";
var binary = "no";
if ( hour == 8 && minutes == 50 && period == "AM"){
    console.log("It's almost 9 in the morning");
}
else if ( hour == 7 && minutes == 15 && period == "PM"){
        console.log("It's just after 7 in the evening.");
    }
else{
    if (minutes < 30){
        approx = "It is just after";
    }
    else if (minutes >= 30){
        approx = "It is almost";
        hour += 1;
        if (hour > 12){
            hour = 1;
        }
    }

    if (hour == 12 && minutes > 30){
        if (period == "AM"){
            period = "PM"
        }
        else{
            period = "AM";
        }
    }
    if (period == "AM"){
        binary = "in the morning.";
    }
    else if (period == "PM"){
        binary = "in the evening.";
    }
    console.log(approx, hour, binary);
}        
