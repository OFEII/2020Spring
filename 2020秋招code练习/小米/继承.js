// 11. js实现一个继承方法

// 父类Person, 拥有属性lastname, 方法hello
// 子类Student, 拥有属性grade, 方法goSchool
// Student继承与Person
// 实现new 一个Student 调用hello 输出lastname 调用goSchool输出grade

function Parent(name) {
    this.lastname = name
}
Parent.prototype.hello = function() {
    console.log(this.lastname)
}
function Student(name, lastname) {
    Parent.call(this, lastname)
    this.grade = name
}
Student.prototype = Object.create(Parent.prototype);
Student.prototype.goSchool = function() {
    console.log(this.grade);
}
Student.prototype.constructor = Student;


var grade = new Student('一年级', 'father');
grade.hello()
grade.goSchool()