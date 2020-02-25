function a() {
    this.b = 3
}
a.prototype.b = 7;
var t = new a();
var b = 2;
a();
console.log(t.b);
console.log(b);
// 3
// 3