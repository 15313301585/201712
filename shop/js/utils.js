var utils=(function () {
    //把类数组转化为数组（兼容所有浏览器）
    function toArray(classAry) {
        var ary=[];
        try{
            ary=Array.prototype.slice.call(classAry);
        }catch (e){
            for(var i=0;i<classAry.length;i++){
                ary[ary.length]=classAry[i];
            }
        }
        return ary;
    }
    //把JSON格式的字符串，装换为JSON格式的对象
    function toJSON(str) {
       return "JSON" in window ? JSON.parse(str):eval('('+str+')');
    }
    

    return {
        toArray:toArray,
        toJSON:toJSON

    }

})();

utils.toArray();