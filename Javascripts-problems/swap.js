var friendlist = ["Shorif","Karim","Raju","Raj","Navid"]
var max = friendlist[0]
    maxLength = friendlist[0].length
    for (var i =0; i < friendlist.length; i ++){
        var name = friendlist[i]
        if (name.length > maxLength){
            max = name
        }
    }
