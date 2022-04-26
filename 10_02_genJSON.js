function Animal (name, type, age)
{
    this.name = name
    this.type = type
    this.age = age
}

Animal.prototype.introduce = function() {
    console.log(this.name+"은 "+this.type+"이고 "+this.age+"살 이다.")
}