//JSON不是数据类型，它仅仅是一种数据格式
//JSON

// var obj={name:"珠峰培训",age:8}; //普通对象
// var opp={"name":"珠峰培训","age":8}; //JSON格式的对象：把属性名用双引号（只能是双引号不能是单引号）包起来的格式就叫做JSON格式的数据

//项目中客户端和服务器端传输的数据一般都是JSON格式的字符串
// var str='[{"name":"张三","age":8},{"name":"李四","24"}]'; //JSON格式的字符串

//JSON格式的对象和字符串之间的相互转换
//1.JSON.parse:把字符串（必须是JSON格式的字符串）转换为JSON格式的对象，如果转换的字符串不是JSON格式的，转换的过程中会报错

// var str='[{"name":"张三","age":8},{"name":"李四","age":24}]';
// var  jsonAry=JSON.parse(str);//[ { name: '张三', age: 8 }, { name: '李四', age: 24 } ]


//这个方法在IE6-7中不兼容：原因是，在IE6-7中,window对象中没有JSON这个对象;

//在IE6-7中,我们可以使用eval来代替JSON.parse这个方法，实现把字符串转换为对象
// var str='[{"name":"张三","age":8},{"name":"李四","age":24}]';
// var jsonAry=eval('('+str+')'); //使用eval转换的时候，需要手动的给字符串外层加一个小括号，目的是为了防止有些数据不加小括号报错

//2.JSON.stringify:把对象转换为JSON格式的字符串
// var ary=[{name:'珠峰',age:8}];
// JSON.stringify(ary); //'[{"name":'珠峰',"age":8}]'

