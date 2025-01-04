function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log("Hello, my name is " + this.name);
      console.log("I am " + this.age + " years old.");
    };
    this.changeName = function(newName) {
      this.name = newName;
    };
    this.updateAge = function(newAge) {
      this.age = newAge;
    };
    this.introduce = function() {
      console.log("Hello! I'm " + this.name + " and I'm " + this.age + " years old.");
    };
  }
  
  const person1 = new Person("John", 25);
  person1.greet();
  person1.changeName("Mike");
  person1.updateAge(30);
  person1.introduce();
                                               