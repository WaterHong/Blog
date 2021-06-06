const arrs = [[1,2,3,4,5],[11,12,13,14,15],[21,22,23,24,25],[31,32,33,34,35]];
let len;
function deal(arr,type) {
    if(!arr[0]){
        return;
    }
    switch (type) {
        // 右:总是第一排
        case 0:
            for (let index = 0; index < arr[0].length; index++) {
                console.log(arr[0][index]);
            }
            arr.splice(0,1);
            deal(arr,1);
            break;
        // 下
        case 1:
            len = arr[0].length;
            for (let index = 0; index < arr.length; index++) {
                console.log(arr[index][len-1]);
                arr[index].splice([len-1],1);
            }
            deal(arr,2);
            break;
        // 左
        case 2:
            len = arr[0].length;
            for (let index = len - 1; index >= 0; index--) {
                console.log(arr[arr.length - 1][index]);
            }
            arr.splice(len-1,1);
            deal(arr,3);
            break;      
        // 上
        case 3:
           len = arr.length;
            for (let index = len - 1; index >= 0; index--) {
                console.log(arr[index][0]);
                arr[index].splice([0],1);
            }
            deal(arr,0);
            break;
        default:
            console.log("exit");
            break;
    }
}

deal(arrs,0);
