function isLeapYear(year){
    if ((year % 4 ==0) && (year % 100 !=0) || (year % 400==0)){
        console.log("Your year is a leap Year")
    }
    else{
        console.log("Your year is not a leap Year")        
    }
}
isLeapYear(1704);
isLeapYear(1700);
