function subNew(){
    var obj = {}
   将父级的原型prototype指向子级的隐式原型__proto__
    obj.__proto__ = Parent.prototype
   //创建实例的时候传参
    var res = Parent.call(obj,...arguments)
   //当构造函数有return时，返回return值,没有则返回obj{}
    return typeof(res) === 'object'&&res || obj    
  }
  


  // objectFactory(name, 'cxk', '18')
function objectFactory() {
    const obj = new Object();
    const Constructor = [].shift.call(arguments);
  
    obj.__proto__ = Constructor.prototype;
  
    const ret = Constructor.apply(obj, arguments);
  
    return typeof ret === "object" ? ret : obj;
  }
