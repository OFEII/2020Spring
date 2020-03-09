// 实现new函数
function myNew() {
    let obj = {}// 创建一个空对象
    let Con = [].shift.call(arguments)// 获取构造函数
    obj.__proto__ = Con.prototype// 设置空对象的原型
    let res = Con.apply(obj, arguments)// 绑定 this 并执行构造函数
    return res instanceof Object ? res : obj// 确保返回值为对象
}





