var ary=[12,34,45,23,15,17];
/*
* sort实现的原理：
* 每一次拿出数组中的当前项和后一项，每一次这样的操作都会让传递的匿名函数执行一次，不仅执行，而且还给这个匿名函数传递了两个实参：
*
* a = >本次拿出的当前项
* b => 本次拿出的后一项
*
* 在匿名函数中，如果我return的结果是一个大于0的数，让a和b交换位置；反之返回小于等于0的值，a和b的位置不变
*
*
* */



ary.sort(function (a,b) {
    return a-b;
    //return 1; //等价于ary.reverse 把整个数组倒过来排序
});

//面试题：1.把一个数组随机打乱

// ary.sort(function () {
// //    每一次返回一个随机创建的大于零或者小于零的数即可
//     return Math.round(Math.random()*(10)-5);
// });

//面试题2：
var ary=[
    {
        name:"张三",
        age:28
    },
    {
        name:"李四",
        age:18
    },
    {
        name:"王二",
        age:48
    },
];
// 把数组按照年龄升序排序
// ary.sort(function (a,b) {
//   return  a.age-b.age;
// });
// console.log(ary);


//按照姓名排序
ary.sort(function (a,b) {
    var curName=a.name;
    var nextName=b.name;
    return  curName.localeCompare(nextName);//localeCompare字符串的方法，用来比较两个字符串的大小
});