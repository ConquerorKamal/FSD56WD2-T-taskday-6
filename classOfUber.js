// write a class to calculate the Uber price.

class Uber{
    constructor(distance,price = 100){
        this.distance = distance
        this.price = price

    }
    getPrice(distance){
        if(distance <= 6){
            return this.price
        }
        else if(distance > 6 && distance <= 10){
            this.price += 500
            return this.price
        }
        else if(distance > 10 && distance <= 25){
            this.price += 1000
            return this.price
        }
        else if (distance > 25 && distance <= 40){
            this.price += 1500
            return this.price
        }
        else if (distance > 40 && distance <= 55){
            this.price += 2000
            return this.price
        }
        else if(distance > 55 && distance <= 70){
            this.price += 3000
            return this.price
        }
        else if(distance > 70 && distance <= 100){
            this.price += 4500
            return this.price
        }
        else{
            this.price += 5000
            return this.price
        }        
        
    }
}
uber1 = new Uber();
uber2 = new Uber();
uber3 = new Uber();


console.log(`uber1 price => ${uber1.getPrice(56)}`)                      //uber1 price => 3100
console.log(`uber2 price => ${uber2.getPrice(50)}`)                      //uber2 price => 2100
console.log(`uber3 price => ${uber3.getPrice(101)}`)                     //uber3 price => 5100
