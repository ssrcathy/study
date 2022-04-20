var s = "   fly me  to  the moon";
var lengthOfLastWord = function (s) {
    var list = s.trim().split(" ");
    var l = list[list.length - 1].length;
    return l;
};
lengthOfLastWord(s);
