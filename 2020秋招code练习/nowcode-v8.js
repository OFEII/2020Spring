// 一：单行输入，
//     牛客网V8引擎是利用了readline()接收输入的每一行，该行字符数不能超过1024个，否则会报错
var line = readline ();

// 二：多行输入
// eadline是可以重载的，也就是说每一次调用readline()就会识别一行输入数据，多行输入其实就是写多个readline()即可

// 固定行数输入
var lineNum = parseInt(readline()) //获取行数
for (let i = 0; i < lineNum; i++) {
    var lines = readline();  //遍历行数，依次获取每一行的字符
}
// eg： 输入 3
//         1 2
//         2 3

//任意

while (lines = readline()) {
    
}
// 三：输出，
//     牛客网输出函数用print()和console.log()都可以，多行输入会根据你的print个数来自动折行；或者利用print(lines + ‘\n’);来折行

// 1.输入一行，输出一行
var line = readline();
print();
//或者
while(line = readline()){
    //Do some operation
    print();
}

// 2.输入两行，输出一行
var line = readline();
var num = +(readline());
print();

// 字符串转为数组
var arr = line.split(' ');
// 读取到输入的两个正整数
var num1 = +(arr[0]), num2 = +(arr[1])