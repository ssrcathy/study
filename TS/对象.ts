// var sites = {
//     site1:"Baidu",
//     site2:"Google"
// }
//
// var invokesite = function(obj:{site1:string,site2:string}){
//     console.log("site1:"+obj.site1);
//     console.log("site2:"+obj.site2);
// }
//
// invokesite(sites);


interface IPoint{
    x:number
    y:number
}

function addPoints(p1:IPoint,p2:IPoint):IPoint{
    var x = p1.x+p2.x;
    var y = p1.y+p2.y;
    return {x:x,y:y}
}

var newPoint = addPoints({x:3,y:4},{x:2,y:5})
console.log(newPoint)
// var newPoint2 = addPoints({x:2},{x:3,y:2});
// console.log(newPoint2)
