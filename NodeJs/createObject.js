const person = {
    name:"sumit",
    age: 22,
    print: function(){
        console.log("Hi I am",this.name, "Of age", this.age)
    }
}
person.print();