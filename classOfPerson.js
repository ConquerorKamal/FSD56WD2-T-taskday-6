// Write a “person” class to hold all the details.

class Person{
    constructor(){
        this.name = 'NONAME'
        this.age = 'NOAGE'
        this.address = 'NOADDRESS'
        this.sex = 'NOSEX'
        this.dob = '000000'
        this.maritalStatus = 'NOSTATUS'
        this.occupation = 'NOOCCUPATION'
    }
    getDetails(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.address)
        console.log(this.sex)
        console.log(this.dob)
        console.log(this.maritalStatus)
        console.log(this.occupation);
    }
}

let person1 = new Person();
person1.name = 'kamal'
person1.age = '23'
person1.address = 'Bangalore,Karnataka'
person1.sex = 'male'
person1.dob = '01/12/2000'
person1.maritalStatus = 'single'
person1.occupation = 'fullStackDeveloper'

person1.getDetails();
//kamal
// 23
// Bangalore,Karnataka
// male
// 01/12/2000
// single
// fullStackDeveloper

console.log(person1)
// Person {
//   name: 'kamal',
//   age: '23',
//   address: 'Bangalore,Karnataka',
//   sex: 'male',
//   dob: '01/12/2000',
//   maritalStatus: 'single',
//   occupation: 'fullStackDeveloper'
// }
