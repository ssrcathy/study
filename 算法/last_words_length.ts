var s:string="   fly me  to  the moon";
var lengthOfLastWord = function(s) {
    let list = s.trim().split(" ");
    let l:number = list[list.length-1].length;
    return l

};
lengthOfLastWord(s)
