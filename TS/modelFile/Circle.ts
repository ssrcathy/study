import shape = require("./IShape");
export class Circle implements shape.IShape{
    public draw(){
        console.log("Circle is draw (external module)")
    }
}
