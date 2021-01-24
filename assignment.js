// https://github.com/RakibulIslamRakib7/assignment.js

// 1st Problem

function kilometerToMeter(meter){
    var result = meter /1000;
    return result;
}
var output = kilometerToMeter(1225);
console.log(output);


// 2nd  Problem
function budgetCalculator(watch,phone,laptop){
    var total = 0;
    wacthPrice = watch * 50;
    phonePrice = phone * 100;
    laptopPrice = laptop * 500;
    total = wacthPrice + phonePrice + laptopPrice;
    return total;
}
var output = budgetCalculator(4,5,3);
console.log(output);


// 3rd problem
function hotelCost(day){
    totalcost = 0;
    if (day > 0 && day < 10){
        var hotelfee = day * 100;
        return totalcost + hotelfee 
    }
    else if (day > 10 && day < 21){
        var hotelfee = 1000 + (day-10) * 80;
        return totalcost + hotelfee
    } 
    else if(day > 20){
        var hotelfee = 1800 + (day-20) * 50;
        return totalcost + hotelfee
    }
    else{
        console.log("Number of days is not correct")
    }
    
}
var output = hotelCost(54);
console.log(output);


// 4th Porblem
function megaFriend(friendlist){
    var max = friendlist[0]
    maxLength = friendlist[0].length
    for (var i =0; i < friendlist.length; i ++){
        var name = friendlist[i]
        if (name.length > maxLength){
            max = name
        }
    }
    return max;
}
var friendlist = ["Shorif","Karim","Raju","Raj","Navid"]
console.log(megaFriend(friendlist));
