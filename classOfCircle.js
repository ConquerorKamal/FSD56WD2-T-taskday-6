class Circle{
    constructor(radius,color){
        this.radius = radius
        this.color = color

    }
    getRadius(){
        console.log(this.radius) ;
    }
    setRadius(radius){
        console.log("void");
    }
    getColor(){
        console.log(this.color);
    }
    setColor(color){
        console.log("void");
    }
    toString(){
        console.log(`Circle[radius = ${this.radius},color = ${this.color}]`)
    }
    getArea(){
        console.log(Math.PI*this.radius**2)
    }
    getCircum(){
        console.log(2*Math.PI*this.radius)
    }

}
let circle1 = new Circle(1.0,"red")

circle1.getCircum()                                   
//6.283185307179586
circle1.getArea()
// 3.141592653589793
