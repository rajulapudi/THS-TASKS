 //OOPs

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.language = "English";

var myFather = new Person("John", "Doe", 50, "blue","hindi");
var myDaugt = new Person("John", "Doe", 50, "red", "telugu");
console.log(myDaugt.language);