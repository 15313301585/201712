"use strict";
~function () {
    //->获取数据
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = xhr.responseText;//=>JSON格式的字符串
            window.result = utils.toJSON(result);
        }
    };
    xhr.send(null);

//数据绑定：ES6中的模板字符串（原理：传统的字符串拼接）

    var ListBox = document.getElementById('list');
    var str = ``;//这不是单引号
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        //  在数据绑定的时候，我们把价格、热度、上架时间等信息存储在当前的li的自定义属性上（设置自定义属性属性名最好是data-xxx），后续的某些操作中如果需要用到这些值，直接的从自定义属性中获取即可
        str += `<li data-price="${item.price}" data-hot="${item.hot}" data-time="${item.time}"><a href="javascript:;">
    <img src="${item.img}" alt="">
    <p>${item.title}</p>
    <span>${item.price}</span>
</a></li>`
    }

    ListBox.innerHTML = str;

}();

//实现按照价格升序排序
~function () {
    var listBox=document.getElementById('list'),
        oList=listBox.getElementsByTagName("li");
    var headerBox=document.getElementById("header"),
        linkList=headerBox.getElementsByTagName('a');

    for (var i = 0; i < linkList.length; i++) {
        linkList[i].myMethod=-1;
        linkList[i].myIndex=i;
        linkList[i].onclick=function () {
            //this:linkList[1]
            this.myMethod *=-1; //可以让每一次点击的时候，当前A标签存储的自定义属性从1~-1之间来回切换
            // changePosition.call(linkList[1]);
            changePosition.call(this);
        };
    }


    function changePosition() {
        //this:linkList[1]
        var _this=this;
        //点击当前A，我们需要把其他的A标签myMethod回归初始值，这样保证下一次点击其他的a标签还是从升序开始的
        for(var k=0;k<linkList.length;k++){
            if(k!==_this.myIndex){
                //不是当前点击的a
                linkList[k].myMethod=-1;
            }
        }
        oList=utils.toArray(oList);
        oList.sort(function (a,b) {
            //=>this:window
            //按照点击的不同列实现排序（需要知道当前点击的是几列）
            var index=_this.myIndex,
                attr='';
            switch (index){
                case 0:
                    attr='data-time';
                    break;
                case 1:
                    attr='data-price';
                    break;
                case 2:
                    attr='data-hot';
                    break;
            }


            var cur=a.getAttribute(attr),
                next=b.getAttribute(attr);
            if(index===0){
               //获取的日期值需要特殊处理
                cur=cur.replace(/-/g,'');
                next=next.replace(/-/g,'');
            }
            return  (cur-next)*_this.myMethod;
        });

        var frg=document.createDocumentFragment();//创建一个文档碎片（一个临时存储DOM元素的容器）
        //    循环绑定好排序的li，添加到页面上
        for (var i = 0; i < oList.length; i++) {
            //listBox.appendChild(oList[i]); //由于DOM的映射机制，我们在js中把某一个li元素对象（和页面中的LI标签一一映射）增加的容器的末尾，相当于把页面中的映射的标签挪到容器的末尾，所以不是新增而是位置的改变
            frg.appendChild(oList[i]);
        }

        listBox.appendChild(frg);//循环完成后，把当前文档碎片中的内容统一的添加到页面中(只触发一次DOM回流)
        frg=null;
    }

}();



