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
