function myNew(){
    //1. 创建一个新对象obj
    let obj = new Object();
    //参数第一项为构造函数fn， 删除并拿到arguments的第一项 arguments的第一项为构造函数
    let fn = [] .shift.call(arguments);

    //2.将构造函数中的作用域复制给新对象 也就是把obj_proto_连接到构造函数fn原型
     obj._proto_ = fn.prototype;
     // 返回执行结果用result接受
     let result = fn.apply(obj,arguments);

    // 2.如果放回对象，则把这个对象放回，否则的话就返回步骤1的对象
     return typeof  result === 'object'? result:obj;
}
let a = myNew('111')