let content = document.getElementById("content")

function checkLeapYear( year ) {
    return(year % 4===0 && year % 100 != 0 
        || year % 100 === 0 && year % 400===0)
        
    }
    function findDaysInMonth( month, year){
    if(month >12 && month < 1){
        console.log(`Invalid month ${month}`);
    }

    if(month==2){
           if(checkLeapYear( year )) {
            console.log(`The month 29 days,in ${year}`);
           }    
    else {
        console.log(`The month 28 days,in ${year}`);
    }
    
    }

    else if(month==4,month==5,month==9,month==11 ){
        console.log(`The month 30 days,in ${year}`);
    }
    else{
        console.log(`The month 31 days,in ${year}`);
    }
}
findDaysInMonth(2,100);