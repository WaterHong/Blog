/**
 * 实现一个flat函数
 */

var arr1 = [1, 2, [3, 4,[5,6]]];

// 1.递归
Array.prototype.flat = function () { // 注意，这里不能用箭头函数
    let res = [];
    let content = this;
    const flatFun = (arr,res) => {
        arr.forEach(ele => {
            if(Array.isArray(ele)) {
                flatFun(ele,res);
            }else {
                res.push(ele)
            }
        })
        return res;
    }
    return flatFun(content,res);
    
}
console.log(arr1.flat());

// 2.转字符串
Array.prototype.flat = function() {
	return this.toString()		
			.split(",")   		
			.map(item => +item);
};

// test
console.log(arr1.flat())
